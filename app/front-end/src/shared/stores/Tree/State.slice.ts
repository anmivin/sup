import { StateCreator } from 'zustand';

import { DRAWER_VARIANTS } from '@type/enums';

import { TreeStateSliceProps } from './Tree.types';

export const TreeStateSlice: StateCreator<TreeStateSliceProps, [], []> = (set) => ({
  isTreeDrawerOpen: false,
  setIsTreeDrawerOpen: (isTreeDrawerOpen) => {
    set({ isTreeDrawerOpen });
  },

  treeDrawerType: DRAWER_VARIANTS.Read,
  setTreeDrawerType: (treeDrawerType) => {
    set({ treeDrawerType });
  },

  isSimDrawerOpen: false,
  setIsSimDrawerOpen: (isSimDrawerOpen) => {
    set({ isSimDrawerOpen });
  },

  simDrawerType: DRAWER_VARIANTS.Read,
  setSimDrawerType: (simDrawerType) => {
    set({ simDrawerType });
  },

  isCropModalOpen: false,
  setIsCropModalOpen: (isCropModalOpen) => {
    set({ isCropModalOpen });
  },
});
