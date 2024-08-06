import { PUBLIC_BUCKET_NAMES } from '@back/minio/minio.dto';

export const FileTable: Record<PUBLIC_BUCKET_NAMES, string> = {
  [PUBLIC_BUCKET_NAMES.Avatars]: 'users',
  [PUBLIC_BUCKET_NAMES.SimImage]: 'sims',
  [PUBLIC_BUCKET_NAMES.TreeImage]: 'trees',
  [PUBLIC_BUCKET_NAMES.Debug]: 'debug',
};
