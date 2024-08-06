import { StateCreator } from 'zustand';

import { DRAWER_VARIANTS, SIGN_FORM_VARIANTS } from '@type/enums';

import { ModalsProps } from './Common.types';

export const ModalsSlice: StateCreator<ModalsProps, [], []> = (set) => ({
  isImageModalOpen: false,
  setIsImageModalOpen: (payload) => {
    set({ isImageModalOpen: payload });
  },

  isSignModalOpen: false,
  setIsSignModalOpen: (payload) => {
    set({ isSignModalOpen: payload });
  },

  isTreeDrawerOpen: false,
  setIsTreeDrawerOpen: (payload) => {
    set({ isTreeDrawerOpen: payload });
  },

  isSimDrawerOpen: false,
  setIsSimDrawerOpen: (payload) => {
    set({ isSimDrawerOpen: payload });
  },

  signFormType: SIGN_FORM_VARIANTS.SignIn,
  setSignFormType: (signFormType) => {
    set({ signFormType });
  },

  treeDrawerType: DRAWER_VARIANTS.Read,
  setTreeDrawerType: (treeDrawerType) => {
    set({ treeDrawerType });
  },

  simDrawerType: DRAWER_VARIANTS.Read,
  setSimDrawerType: (simDrawerType) => {
    set({ simDrawerType });
  },
});
