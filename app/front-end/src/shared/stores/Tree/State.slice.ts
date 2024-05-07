import { StateCreator } from 'zustand';

import { DrawerVariants } from '@constants/sharedTypes';

import { TreeStateSliceProps } from './Tree.types';

export const TreeStateSlice: StateCreator<TreeStateSliceProps, [], []> = (set) => ({
  isTreeDrawerOpen: false,
  setIsTreeDrawerOpen: (isTreeDrawerOpen) => {
    set({ isTreeDrawerOpen });
  },

  treeDrawerType: DrawerVariants.Read,
  setTreeDrawerType: (treeDrawerType) => {
    set({ treeDrawerType });
  },

  isSimDrawerOpen: false,
  setIsSimDrawerOpen: (isSimDrawerOpen) => {
    set({ isSimDrawerOpen });
  },

  simDrawerType: DrawerVariants.Read,
  setSimDrawerType: (simDrawerType) => {
    set({ simDrawerType });
  },
});
