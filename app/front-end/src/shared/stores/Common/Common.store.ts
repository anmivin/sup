import { create } from 'zustand';

import { ErrorAlertProps, InfoALertProps, SuccessAlertProps } from './Common.types';

import { ErrorSlice } from './Error.slice';
import { InfoSlice } from './Info.slice';
import { SuccessSlice } from './Success.slice.';

export const CommonStore = create<ErrorAlertProps & SuccessAlertProps & InfoALertProps>()((...data) => ({
  ...ErrorSlice(...data),
  ...SuccessSlice(...data),
  ...InfoSlice(...data),
}));
