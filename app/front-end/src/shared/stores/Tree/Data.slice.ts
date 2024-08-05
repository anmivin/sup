import { StateCreator } from 'zustand';

import { CommonStore } from '@stores/Common/Common.store';

import { TreeDataSliceProps } from './Tree.types';

import {
  createSimRequest,
  createTreeRequest,
  deleteImageRequest,
  editImageRequest,
  fetchSimsForTree,
  fetchSimsForUser,
  saveImageRequest,
} from './Tree.api';

const { setErrorCommonAlertOpen, setSuccessCommonAlertOpen } = CommonStore();

export const TreeDataSlice: StateCreator<TreeDataSliceProps, [], []> = (set) => ({
  defaultSims: null,
  simsInTree: null,
  trees: null,

  getSimsForTree: async (payload) => {
    try {
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },
  getSimsForUser: async (payload) => {
    try {
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },
  getSim: async (payload) => {
    try {
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },

  createTree: async (payload) => {
    try {
      const res = await createTreeRequest(payload);
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },

  editTree: async (payload) => {
    try {
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },
  removeTree: async (payload) => {
    try {
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },

  createSim: async (payload) => {
    try {
      const res = await createSimRequest(payload);
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },
  editSim: async (payload) => {
    try {
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },
  removeSim: async (payload) => {
    try {
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },

  addPartner: async () => {
    try {
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },
  removePartner: async () => {
    try {
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },

  addChild: async () => {
    try {
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },
  removeChild: async () => {
    try {
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },

  addParent: async () => {
    try {
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },
  removeParent: async () => {
    try {
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },

  getDefaultSims: async () => {
    try {
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },

  saveImage: async (payload) => {
    try {
      await saveImageRequest(payload);
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },
  editImage: async (payload) => {
    try {
      await editImageRequest(payload);
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },

  deleteImage: async (payload) => {
    try {
      await deleteImageRequest(payload);
    } catch (e) {
      setErrorCommonAlertOpen(true);
    }
  },
});
