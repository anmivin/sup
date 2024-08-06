import { StateCreator } from 'zustand';

import { SuccessAlertProps } from './Common.types';

export const SuccessSlice: StateCreator<SuccessAlertProps, [], []> = (set) => ({
  commonSuccessAlertOpen: false,
  setSuccessCommonAlertOpen: (payload) => {
    set({ commonSuccessAlertOpen: payload });
  },
});
