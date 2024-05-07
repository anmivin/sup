import { ZodType, z } from 'zod';

export interface CreateTreeDrawerProps {
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
