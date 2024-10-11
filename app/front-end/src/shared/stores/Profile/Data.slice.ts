/* import { decode } from 'jsonwebtoken'; */
import { StateCreator } from 'zustand';

import { AccessTokenPayload, ProfileDataSliceProps, googleToken } from './Profile.types';

import { createUser, logInRequest, logInWithGoogleRequest } from './Profile.api';

export const ProfileDataSlice: StateCreator<ProfileDataSliceProps, [], []> = (set) => ({
  userId: null,
  role: null,
  token: null,

  createUser: async (payload) => {
    try {
      const userId = await createUser(payload);
      set({ userId });
    } catch (e) {}
  },
  login: async (payload) => {
    try {
      const token = await logInRequest(payload);
      if (token) {
        /*   const decoded = decode(token) as AccessTokenPayload;
        set({ userId: decoded.userId, role: decoded.role }); */
      }
    } catch (e) {}
  },
  loginWithGoogle: async (payload) => {
    /*  const decoded = decode(payload) as googleToken; */
    /*    const userCreds = { email: decoded.email, avatar: decoded.picture ?? null, name: decoded.name }; */
    try {
      /*       const token = await logInWithGoogleRequest(userCreds);
              set({ userId: decoded.userId, role: decoded.role }); */
    } catch (e) {}
  },
  logout: () => {
    set({ userId: null, role: null });
  },
});
