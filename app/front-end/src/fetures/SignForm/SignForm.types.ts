import { ZodType, z } from 'zod';

import { DefaultModalProps } from '../../shared/ui/Modal';

export enum SignFormtype {
  SignUp = 'SignUp',
  SignIn = 'SignIn',
}

export interface SignFormProps extends Omit<DefaultModalProps, 'children'> {}

export interface SignFormValuesProps {
  name: string;
  password: string;
  email?: string;
}

export const SignFormValuesSchema: ZodType<SignFormValuesProps> = z.object({
  name: z.string().max(20, 'Username must not exceed 20 characters'),
  email: z.string().optional(),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
});
