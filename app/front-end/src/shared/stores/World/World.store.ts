import { create } from 'zustand';

import { WorldStoreProps } from './World.types';

import { fetchWorldMap, fetchWorlds } from './World.api';

export const WorldStore = create<WorldStoreProps>((set) => ({
  worlds: null,
  loadingWorlds: false,
  selectedWorld: null,
  loadingSelectedWorld: false,
  getWorlds: async (payload) => {
    set({ loadingWorlds: true });
    try {
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
}));
