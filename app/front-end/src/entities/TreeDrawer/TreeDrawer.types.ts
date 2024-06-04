import { ZodType, z } from 'zod';

import { DrawerVariants } from '@constants/sharedTypes';

export interface CreateTreeDrawerProps {
  type: DrawerVariants;
  onCloseModal: () => void;
}

export interface CreateTreeForm {
  name: string;
  image: string;
  part: string;
  icludeDefault: boolean;
}

export const TreeDrawerSchema: ZodType<CreateTreeForm> = z.object({
  name: z.string(),
  image: z.string(),
  part: z.string(),
  icludeDefault: z.boolean(),
});
