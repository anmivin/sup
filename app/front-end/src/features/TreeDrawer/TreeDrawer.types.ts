import { ZodType, z } from 'zod';

import { DRAWER_VARIANTS } from '@type/enums';

export interface CreateTreeDrawerProps {
  type: DRAWER_VARIANTS;
  onCloseModal: () => void;
}

export interface CreateTreeForm {
  name: string;
  imageId?: string;
  /*   part: string;
  icludeDefault: boolean; */
}

export const TreeDrawerSchema: ZodType<CreateTreeForm> = z.object({
  name: z.string(),
  imageId: z.string().optional(),
  /*   part: z.string(),
  icludeDefault: z.boolean(), */
});
