import { StateCreator } from 'zustand';

import { GameParts } from '@constants/enums';
import { SignFormVariants } from '@constants/sharedTypes';

import { ProfileStateSliceProps } from './Profile.types';

export const ProfileStateSlice: StateCreator<ProfileStateSliceProps, [], []> = (set) => ({
  gamePart: GameParts.Four,
  setGamePart: (gamePart) => {
    set({ gamePart });
  },

  isDarkTheme: () => {
    const storage = localStorage.getItem('theme');
    return storage ? JSON.parse(storage) : false;
  },
  setIsDarkTheme: (isDarkTheme) => {
    set({ isDarkTheme });
    localStorage.setItem('theme', JSON.stringify(isDarkTheme()));
  },

  isSignFormOpen: false,
  setIsSignFormOpen: (isSignFormOpen) => {
    set({ isSignFormOpen });
  },

  signFormType: SignFormVariants.SignIn,
  setSignFormType: (signFormType) => {
    set({ signFormType });
  },
});
