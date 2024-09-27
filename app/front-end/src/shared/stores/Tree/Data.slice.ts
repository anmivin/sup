import { StateCreator } from 'zustand';

import { CommonStore } from '@stores/Common/Common.store';
import { ProfileStore } from '@stores/Profile/Profile.store';

import { TreeDataSliceProps } from './Tree.types';

import {
  createSimRequest,
  createTreeRequest,
  deleteImageRequest,
  editImageRequest,
  fetchSimsForTree,
  fetchSimsForUser,
  fetchTreesForUser,
  saveImageRequest,
} from './Tree.api';

export const TreeDataSlice: StateCreator<TreeDataSliceProps, [], []> = (set) => ({
  defaultSims: null,
  simsInTree: null,
  trees: null,
  treesPending: false,

  getTreesForUser: async () => {
    set({ treesPending: true });
    const userId = ProfileStore.getState().userId;
    if (!userId) return;
    try {
      const trees = await fetchTreesForUser(userId);
      set({ trees });
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    } finally {
      set({ treesPending: false });
    }
  },

  getSimsForTree: async (payload) => {
    const userId = ProfileStore.getState().userId;

    try {
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },
  getSimsForUser: async (payload) => {
    try {
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },
  getSim: async (payload) => {
    try {
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },

  createTree: async (payload) => {
    try {
      const res = await createTreeRequest(payload);
      console.log(res);
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },

  editTree: async (payload) => {
    try {
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },
  removeTree: async (payload) => {
    try {
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },

  createSim: async (payload) => {
    try {
      const res = await createSimRequest(payload);
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },
  editSim: async (payload) => {
    try {
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },
  removeSim: async (payload) => {
    try {
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },

  addPartner: async () => {
    try {
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },
  removePartner: async () => {
    try {
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },

  addChild: async () => {
    try {
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },
  removeChild: async () => {
    try {
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },

  addParent: async () => {
    try {
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },
  removeParent: async () => {
    try {
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },

  getDefaultSims: async () => {
    try {
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },

  saveImage: async (payload, type, config) => {
    try {
      const file = await saveImageRequest(payload, type, config);
      return file;
    } catch (e) {
      console.log('store', e);
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },
  editImage: async (payload) => {
    try {
      await editImageRequest(payload);
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },

  deleteImage: async (payload) => {
    try {
      await deleteImageRequest(payload);
    } catch (e) {
      const setErrorCommonAlertOpen = CommonStore.getState().setErrorCommonAlertOpen;
      setErrorCommonAlertOpen(true);
    }
  },
});
