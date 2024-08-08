/* import { decode } from 'jsonwebtoken'; */
import { StateCreator } from 'zustand';

import { ProfileDataSliceProps, googleToken } from './Profile.types';

import { createUser, logInRequest, logInWithGoogleRequest } from './Profile.api';

export const ProfileDataSlice: StateCreator<ProfileDataSliceProps, [], []> = (set) => ({
  userId: 'f170dfbb-ac55-4a92-afc1-d0b6a11620d8',
  token: null,
  createUser: async (payload) => {
    try {
      const userId = await createUser(payload);
      set({ userId });
    } catch (e) {}
  },
  login: async (payload) => {
    try {
      const userId = await logInRequest(payload);
      set({ userId });
    } catch (e) {}
  },
  loginWithGoogle: async (payload) => {
    /*     const decoded = decode(payload) as googleToken;
    const userCreds = { email: decoded.email, avatar: decoded.picture ?? null, name: decoded.name }; */
    try {
      /*       const userId = await logInWithGoogleRequest(userCreds);
      set({ userId }); */
    } catch (e) {}
  },
  logout: () => {
    set({ userId: null });
  },
});
