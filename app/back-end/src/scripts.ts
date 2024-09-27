import { existsSync, unlink } from 'fs';
import * as Minio from 'minio';
import path from 'path';

import achievements from '../../../backend-shared/database/achievements.json';
import aspirations from '../../../backend-shared/database/aspirations.json';
import careers from '../../../backend-shared/database/careers.json';
import skills from '../../../backend-shared/database/skills.json';
import traits from '../../../backend-shared/database/traits.json';

const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT || '127.0.0.1';
const MINIO_PORT = +(process.env.MINIO_PORT || 9000);
const MINIO_ACCESS = process.env.MINIO_ACCESS || 'accessKey';
const MINIO_SECRET = process.env.MINIO_SECRET || 'secretKey';

const UPLOADS_PATH = process.env.UPLOADS_PATH || '../front-end/public/sims4/';

const minioClient = new Minio.Client({
  endPoint: MINIO_ENDPOINT,
  port: MINIO_PORT,
  useSSL: false,
  accessKey: MINIO_ACCESS,
  secretKey: MINIO_SECRET,
});
const policy = (bucketName: string) => {
  return {
    Version: '2012-10-17',
    Statement: [
      {
        Effect: 'Allow',
        Principal: {
          AWS: ['*'],
        },
        Action: ['s3:GetObject'],
        Resource: [`arn:aws:s3:::${bucketName}/*`],
      },
    ],
  };
};

const creteBucket = async (bucketName: string) => {
  const existedBucket = await minioClient.bucketExists(bucketName);
  if (!existedBucket) await minioClient.makeBucket(bucketName);
  const bucketPolicy = JSON.stringify(policy(bucketName));
  await minioClient.setBucketPolicy(bucketName, bucketPolicy);
};

const deleteFiles = (files: { name: string; path: string }[]) => {
  files.map((file) => {
    unlink(path.resolve(UPLOADS_PATH, file.path), (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
};

const moveFileToMinio = async () => {
  try {
    const notFoundFiles: { name: string; type: string }[] = [];
    const foundFiles: { name: string; path: string }[] = [];
    const achievementIcons = achievements.map((item) => item.icon);
    await creteBucket('icons');
    await Promise.all(
      achievementIcons.map(async (item) => {
        const filePath = path.resolve(UPLOADS_PATH, 'achievements/', item);

        if (!existsSync(filePath)) {
          notFoundFiles.push({ name: item, type: 'achievements' });
          return;
        }

        await minioClient.fPutObject('icons', `achievements_${item}`, filePath);

        foundFiles.push({
          name: item,
          path: filePath,
        });
      }),
    );

    const aspirationsIcons = aspirations.map((item) => item.icon);
    await Promise.all(
      aspirationsIcons.map(async (item) => {
        const filePath = path.resolve(UPLOADS_PATH, 'aspirations/', item);

        if (!existsSync(filePath)) {
          notFoundFiles.push({ name: item, type: 'aspirations' });
          return;
        }

        await minioClient.fPutObject('icons', `aspirations_${item}`, filePath);

        foundFiles.push({
          name: item,
          path: filePath,
        });
      }),
    );

    const skillsIcons = skills.map((item) => item.icon);
    await Promise.all(
      skillsIcons.map(async (item) => {
        const filePath = path.resolve(UPLOADS_PATH, 'skills/', item);

        if (!existsSync(filePath)) {
          notFoundFiles.push({ name: item, type: 'skills' });
          return;
        }

        await minioClient.fPutObject('icons', `skills_${item}`, filePath);

        foundFiles.push({
          name: item,
          path: filePath,
        });
      }),
    );

    const traitsIcons = traits.map((item) => item.icon);
    await Promise.all(
      traitsIcons.map(async (item) => {
        const filePath = path.resolve(UPLOADS_PATH, 'traits/', item);

        if (!existsSync(filePath)) {
          notFoundFiles.push({ name: item, type: 'traits' });
          return;
        }

        await minioClient.fPutObject('icons', `traits_${item}`, filePath);

        foundFiles.push({
          name: item,
          path: filePath,
        });
      }),
    );

    const careersIcons = careers.map((item) => item.icon);
    await Promise.all(
      careersIcons.map(async (item) => {
        const filePath = path.resolve(UPLOADS_PATH, 'careers/', item);

        if (!existsSync(filePath)) {
          notFoundFiles.push({ name: item, type: 'careers' });
          return;
        }

        await minioClient.fPutObject('icons', `careers_${item}`, filePath);

        foundFiles.push({
          name: item,
          path: filePath,
        });
      }),
    );
    console.warn(notFoundFiles.map((file) => `${file.name}-${file.type}\n`));
    /* deleteFiles(foundFiles); */
  } catch (error) {
    throw error;
  }
};

moveFileToMinio()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
