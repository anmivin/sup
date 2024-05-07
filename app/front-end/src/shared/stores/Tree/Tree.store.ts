import { create } from 'zustand';

import { TreeDataSliceProps, TreeStateSliceProps } from './Tree.types';

import { TreeDataSlice } from './Data.slice';
import { TreeStateSlice } from './State.slice';

export const TreeStore = create<TreeStateSliceProps & TreeDataSliceProps>((...a) => ({
  ...TreeDataSlice(...a),
  ...TreeStateSlice(...a),
}));
