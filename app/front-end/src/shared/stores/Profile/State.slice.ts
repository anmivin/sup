import { StateCreator } from 'zustand';

import { GAME_PART, SIGN_FORM_VARIANTS } from '@type/enums';

import { ProfileStateSliceProps } from './Profile.types';

export const ProfileStateSlice: StateCreator<ProfileStateSliceProps, [], []> = (set) => ({
  gamePart: GAME_PART.Four,
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
});
