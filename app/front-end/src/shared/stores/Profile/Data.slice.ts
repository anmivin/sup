/* import { decode } from 'jsonwebtoken'; */
import { StateCreator } from 'zustand';

import { ProfileDataSliceProps, googleToken } from './Profile.types';

import { createUser, logInRequest, logInWithGoogleRequest, me } from './Profile.api';

export const ProfileDataSlice: StateCreator<ProfileDataSliceProps, [], []> = (set, get) => ({
  userId: null,
  role: null,
  me: async () => {
    try {
      const data = await me();
      console.log('data', data);
      set({ userId: data.id, role: data.role });
    } catch (e) {}
  },
  createUser: async (payload) => {
    try {
      console.log(payload);
      const userId = await createUser(payload);
      set({ userId });
    } catch (e) {}
  },
  login: async (payload) => {
    try {
      logInRequest(payload);
    } catch (e) {}
  },
  loginWithGoogle: async (payload) => {
    /*     const decoded = decode(payload) as googleToken;
    const userCreds = { email: decoded.email, avatar: decoded.picture ?? null, name: decoded.name };
    try {
      await logInWithGoogleRequest(userCreds);
    } catch (e) {} */
  },
  logout: () => {
    set({ userId: null, role: null });
  },
});
