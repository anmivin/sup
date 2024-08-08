import { create } from 'zustand';

import { ErrorAlertProps, InfoALertProps, ModalsProps, SuccessAlertProps } from './Common.types';

import { ErrorSlice } from './Error.slice';
import { InfoSlice } from './Info.slice';
import { ModalsSlice } from './Modals.slice';
import { SuccessSlice } from './Success.slice.';

export const CommonStore = create<ErrorAlertProps & SuccessAlertProps & InfoALertProps & ModalsProps>()((...data) => ({
  ...ErrorSlice(...data),
  ...SuccessSlice(...data),
  ...InfoSlice(...data),
  ...ModalsSlice(...data),
}));
