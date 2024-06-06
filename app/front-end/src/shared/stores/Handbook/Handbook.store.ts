import { create } from 'zustand';

import { HandbookStoreProps } from './Handbook.types';

import { fetchAspirations, fetchSkills, fetchTraits } from './Handbook.api';

export const HandbookStore = create<HandbookStoreProps>((set) => ({
  aspirations: null,
  skills: null,
  traits: null,
  deaths: null,
  getAspirations: async () => {
    try {
      const res = await fetchAspirations();

      set({ aspirations: res });
    } catch (e) {}
  },
  getSkills: async () => {
    try {
      const res = await fetchSkills();
      set({ skills: res });
    } catch (e) {}
  },
  getTraits: async () => {
    try {
      const res = await fetchTraits();
      set({ traits: res });
    } catch (e) {}
  },
  getDeaths: async () => {
    try {
      const res = await fetchTraits();
      set({ deaths: res });
    } catch (e) {}
  },
}));
