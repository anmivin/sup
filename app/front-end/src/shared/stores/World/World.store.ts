import { create } from 'zustand';

import { WorldStoreProps } from './World.types';

import { fetchWorldMap, fetchWorlds, getBulding, saveBulding } from './World.api';

export const WorldStore = create<WorldStoreProps>((set) => ({
  worlds: null,
  loadingWorlds: false,
  selectedWorld: null,
  loadingSelectedWorld: false,
  selectedBuilding: null,
  loadingBuilding: false,
  getWorlds: async (payload) => {
    set({ loadingWorlds: true });
    try {
      console.log(payload);
      const worlds = await fetchWorlds(payload);
      set({ worlds });
    } catch (e) {
    } finally {
      set({ loadingWorlds: false });
    }
  },
  getWorldMap: async (payload) => {
    set({ loadingSelectedWorld: true });
    try {
      const selectedWorld = await fetchWorldMap(payload);
      set({ selectedWorld });
    } catch (e) {
    } finally {
      set({ loadingSelectedWorld: false });
    }
  },
  getBuilding: async (key) => {
    set({ loadingBuilding: true });
    try {
      const selectedBuilding = await getBulding(key);
      set({ selectedBuilding });
    } catch (e) {
    } finally {
      set({ loadingBuilding: false });
    }
  },
  editBuilding: async (payload, key) => {
    try {
      await saveBulding(payload, key);
    } catch (e) {}
  },
}));
