import { create } from 'zustand';

import { ProfileDataSliceProps, ProfileStateSliceProps } from './Profile.types';

import { ProfileDataSlice } from './Data.slice';
import { ProfileStateSlice } from './State.slice';

export const ProfileStore = create<ProfileDataSliceProps & ProfileStateSliceProps>()((...a) => ({
  ...ProfileDataSlice(...a),
  ...ProfileStateSlice(...a),
}));
