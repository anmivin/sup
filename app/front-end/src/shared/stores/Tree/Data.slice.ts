import { StateCreator } from 'zustand';

import { TreeDataSliceProps } from './Tree.types';

import { createSimRequest, createTreeRequest, fetchSimsForTree, fetchSimsForUser } from './Tree.api';

export const TreeDataSlice: StateCreator<TreeDataSliceProps, [], []> = (set) => ({
  defaultSims: null,
  simsInTree: null,
  trees: null,

  getSimsForTree: async (payload) => {
    try {
    } catch (e) {}
  },
  getSimsForUser: async (payload) => {
    try {
    } catch (e) {}
  },
  getSim: async (payload) => {
    try {
    } catch (e) {}
  },

  createTree: async (payload) => {
    try {
    } catch (e) {}
  },

  editTree: async (payload) => {
    try {
    } catch (e) {}
  },
  removeTree: async (payload) => {
    try {
    } catch (e) {}
  },

  createSim: async (payload) => {
    try {
    } catch (e) {}
  },
  editSim: async (payload) => {
    try {
    } catch (e) {}
  },
  removeSim: async (payload) => {
    try {
    } catch (e) {}
  },

  addPartner: async () => {
    try {
    } catch (e) {}
  },
  removePartner: async () => {
    try {
    } catch (e) {}
  },

  addChild: async () => {
    try {
    } catch (e) {}
  },
  removeChild: async () => {
    try {
    } catch (e) {}
  },

  addParent: async () => {
    try {
    } catch (e) {}
  },
  removeParent: async () => {
    try {
    } catch (e) {}
  },

  getDefaultSims: async () => {
    try {
    } catch (e) {}
  },
});
