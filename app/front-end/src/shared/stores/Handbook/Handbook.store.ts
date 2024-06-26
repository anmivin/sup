import { create } from 'zustand';

import { HandbookStoreProps } from './Handbook.types';

import { fetchAspirations, fetchSkills, fetchTraits } from './Handbook.api';

export const TreeStore = create<HandbookStoreProps>((set) => ({
  aspirations: null,
  skills: null,
  traits: null,
  getAspirations: async () => {
    try {
      console.log('???');
      const res = await fetchAspirations();
      console.log(res);
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
}));
