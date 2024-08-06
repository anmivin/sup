import { StateCreator } from 'zustand';

import { ErrorAlertProps } from './Common.types';

export const ErrorSlice: StateCreator<ErrorAlertProps, [], []> = (set) => ({
  commonErrorAlertOpen: false,
  setErrorCommonAlertOpen: (payload) => {
    set({ commonErrorAlertOpen: payload });
  },
});
