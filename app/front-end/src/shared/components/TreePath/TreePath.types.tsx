import { ReactNode } from 'react';

import { HeartIcon } from '@components/Icons';

export enum partnershipType {
  divorced = 'divorced',
  engaged = 'engaged',
  exes = 'exes',
  married = 'married',
  partners = 'partners',
}

export const PathIconVariants: Record<partnershipType, ReactNode> = {
  [partnershipType.divorced]: <HeartIcon />,
  [partnershipType.engaged]: <HeartIcon />,
  [partnershipType.exes]: <HeartIcon />,
  [partnershipType.married]: <HeartIcon />,
  [partnershipType.partners]: <HeartIcon />,
};
