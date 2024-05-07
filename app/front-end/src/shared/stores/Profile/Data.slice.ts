/* import { decode } from 'jsonwebtoken'; */
import { StateCreator } from 'zustand';

import { ProfileDataSliceProps, googleToken } from './Profile.types';

import { logInRequest, logInWithGoogleRequest } from './Profile.api';

export const ProfileDataSlice: StateCreator<ProfileDataSliceProps, [], []> = (set) => ({
  userId: null,
  token: null,

  login: async (payload) => {
    try {
      const userId = await logInRequest(payload);
      set({ userId });
    } catch (e) {}
  },
  loginWithGoogle: async (payload) => {
    /*  const decoded = decode(payload) as googleToken;
    const userCreds = { email: decoded.email, avatar: decoded.picture, name: decoded.name };
    try {
      const userId = await logInWithGoogleRequest(userCreds);
      set({ userId });
    } catch (e) {} */
  },
  logout: () => {
    set({ userId: null });
  },
});
