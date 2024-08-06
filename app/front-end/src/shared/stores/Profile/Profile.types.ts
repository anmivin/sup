import { components } from '@api/Api';

import { GAME_PART, SIGN_FORM_VARIANTS } from '@type/enums';

export interface ProfileStateSliceProps {
  gamePart: GAME_PART;
  setGamePart: (val: GAME_PART) => void;

  isDarkTheme: () => boolean;
  setIsDarkTheme: (val: () => boolean) => void;

  isSignFormOpen: boolean;
  setIsSignFormOpen: (val: boolean) => void;

  signFormType: SIGN_FORM_VARIANTS;
  setSignFormType: (val: SIGN_FORM_VARIANTS) => void;
}

export interface ProfileDataSliceProps {
  userId: string | null;
  token: string | null;

  createUser: (payload: components['schemas']['InputUserDto']) => void;
  login: (payload: components['schemas']['UserCredentials']) => void;
  loginWithGoogle: (token: string) => void;
  logout: () => void;
}

export interface googleToken {
  email: string;
  name: string;
  picture?: string;
}
