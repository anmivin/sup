import { ReactNode } from 'react';

import { partnershipType } from '@entities/CreateSimDrawer/CreateSimDrawer.types';

import { HeartBrokenIcon, RingIcon, RingsCrossedIcon, RingsIcon, TwoHeartsIcon } from '.';

export const PartnershipIcons: Record<partnershipType, ReactNode> = {
  [partnershipType.divorced]: <RingsCrossedIcon />,
  [partnershipType.engaged]: <RingIcon />,
  [partnershipType.exes]: <HeartBrokenIcon />,
  [partnershipType.married]: <RingsIcon />,
  [partnershipType.partners]: <TwoHeartsIcon />,
};
