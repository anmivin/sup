import { create } from 'zustand';

import { WorldStoreProps } from './World.types';

import { fetchWorldMap, fetchWorlds, getBulding, saveBulding } from './World.api';

export const WorldStore = create<WorldStoreProps>((set) => ({
  worlds: null,
  loadingWorlds: false,
  selectedWorld: null,
  loadingSelectedWorld: false,
  building: null,
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
      const ad = await getBulding(key);
      return ad;
    } catch (e) {
    } finally {
      set({ loadingBuilding: false });
    }
  },
  editBuilding: async (payload, key) => {
    try {
      console.log('sad');
      const j = await saveBulding(payload, key);
      console.log(j);
      return j;
    } catch (e) {
      /*     console.log(e); */
    }
  },
}));
