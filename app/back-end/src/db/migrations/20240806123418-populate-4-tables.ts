import achievements from '../../../../../backend-shared/database/achievements.json';
import aspirations from '../../../../../backend-shared/database/aspirations.json';
import careers from '../../../../../backend-shared/database/careers.json';
import skills from '../../../../../backend-shared/database/skills.json';
import traits from '../../../../../backend-shared/database/traits.json';
import { QueryInterface } from 'sequelize';
import { v4 } from 'uuid';

const MINIO_URL = process.env.MINIO_URL ?? 'http://127.0.0.1:9000';
module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await Promise.all(
      achievements.map(async (achievement) => {
        const iconPath = `${MINIO_URL}/icons/achievements_${achievement.icon}`;
        const [{ id: iconId }] = (await queryInterface.bulkInsert(
          'files',
          [
            {
              id: v4(),
              path: iconPath,
              name: achievement.icon,
            },
          ],
          //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
          { returning: ['id'] },
        )) as { id: string }[];

        await queryInterface.bulkInsert('achievements', [
          {
            key: achievement.key,
            icon_id: iconId,
            points: achievement.points,
            part: 'sims_4',
          },
        ]);
      }),
    );

    await Promise.all(
      aspirations.map(async (aspiration) => {
        const iconPath = `${MINIO_URL}/icons/aspirations_${aspiration.icon}`;

        const [{ id: iconId }] = (await queryInterface.bulkInsert(
          'files',
          [
            {
              id: v4(),
              path: iconPath,
              name: aspiration.icon,
            },
          ],
          //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
          { returning: ['id'] },
        )) as { id: string }[];
        await queryInterface.bulkInsert('aspirations', [
          {
            key: aspiration.key,
            icon_id: iconId,
            steps: aspiration.steps.length,
            group: aspiration.group,
            bonus: aspiration.bonus,
            part: 'sims_4',
          },
        ]);
      }),
    );

    await Promise.all(
      skills.map(async (skill) => {
        const iconPath = `${MINIO_URL}/icons/skills_${skill.icon}`;
        const [{ id: iconId }] = (await queryInterface.bulkInsert(
          'files',
          [
            {
              id: v4(),
              path: iconPath,
              name: skill.icon,
            },
          ],
          //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
          { returning: ['id'] },
        )) as { id: string }[];

        await queryInterface.bulkInsert('skills', [
          {
            key: skill.key,
            icon_id: iconId,
            age: skill.age,
            steps: skill.steps,
            part: 'sims_4',
          },
        ]);
      }),
    );

    await Promise.all(
      traits.map(async (trait) => {
        const iconPath = `${MINIO_URL}/icons/traits_${trait.icon}`;

        const [{ id: iconId }] = (await queryInterface.bulkInsert(
          'files',
          [
            {
              id: v4(),
              path: iconPath,
              name: trait.icon,
            },
          ],
          //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
          { returning: ['id'] },
        )) as { id: string }[];

        await queryInterface.bulkInsert('traits', [
          {
            key: trait.key,
            icon_id: iconId,
            group: trait.group,
            part: 'sims_4',
          },
        ]);
      }),
    );

    await Promise.all(
      careers.map(async (career) => {
        const iconPath = `${MINIO_URL}/icons/careers_${career.icon}`;
        const [{ id: iconId }] = (await queryInterface.bulkInsert(
          'files',
          [
            {
              id: v4(),
              path: iconPath,
              name: career.icon,
            },
          ],
          //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
          { returning: ['id'] },
        )) as { id: string }[];

        await queryInterface.bulkInsert('careers', [
          {
            key: career.key,
            icon_id: iconId,
            age: career.age,
            roots: career.roots.length,
            part: 'sims_4',
          },
        ]);
      }),
    );
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('skills', {});
    await queryInterface.bulkDelete('traits', {});
    await queryInterface.bulkDelete('aspirations', {});
    await queryInterface.bulkDelete('achievements', {});
    await queryInterface.bulkDelete('files', {});
  },
};
