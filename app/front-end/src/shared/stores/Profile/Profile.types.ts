import { components } from '@api/Api';

import { GameParts } from '@constants/enums';
import { SignFormVariants } from '@constants/sharedTypes';

export interface ProfileStateSliceProps {
  gamePart: GameParts;
  setGamePart: (val: GameParts) => void;

  isDarkTheme: boolean;
  setIsDarkTheme: (val: boolean) => void;

  isSignFormOpen: boolean;
  setIsSignFormOpen: (val: boolean) => void;

  signFormType: SignFormVariants;
  setSignFormType: (val: SignFormVariants) => void;
}

export interface ProfileDataSliceProps {
  userId: string | null;
  token: string | null;

  login: (payload: components['schemas']['UserCredentials']) => void;
  loginWithGoogle: (token: string) => void;
  logout: () => void;
}

export interface googleToken {
  email: string;
  name: string;
  picture?: string;
}
