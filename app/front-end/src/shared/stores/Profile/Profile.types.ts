import { components } from '@api/Api';

import { GAME_PART, USER_ROLES } from '@type/enums';

export interface AccessTokenPayload {
  userId: string;
  role: string;
}

export interface ProfileStateSliceProps {
  gamePart: GAME_PART;
  setGamePart: (val: GAME_PART) => void;
  isDarkTheme: () => boolean;
  setIsDarkTheme: (val: () => boolean) => void;
}

export interface ProfileDataSliceProps {
  userId: string | null;
  role: USER_ROLES | null;
  createUser: (payload: components['schemas']['InputUserDto']) => void;
  login: (payload: components['schemas']['UserCredentials']) => void;
  loginWithGoogle: (token: string) => void;
  logout: () => void;
  me: () => void;
}

export interface googleToken {
  email: string;
  name: string;
  picture?: string;
}
