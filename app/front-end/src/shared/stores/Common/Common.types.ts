import { DRAWER_VARIANTS, SIGN_FORM_VARIANTS } from '@type/enums';

export interface ErrorAlertProps {
  commonErrorAlertOpen: boolean;
  setErrorCommonAlertOpen: (payload: boolean) => void;
}

export interface SuccessAlertProps {
  commonSuccessAlertOpen: boolean;
  setSuccessCommonAlertOpen: (payload: boolean) => void;
}

export interface InfoALertProps {}

export interface ModalsProps {
  isImageModalOpen: boolean;
  setIsImageModalOpen: (payload: boolean) => void;

  isSignModalOpen: boolean;
  setIsSignModalOpen: (payload: boolean) => void;

  isBuildingModalOpen: boolean;
  setIsBuildingModalOpen: (payload: boolean) => void;

  isTreeDrawerOpen: boolean;
  setIsTreeDrawerOpen: (payload: boolean) => void;

  isSimDrawerOpen: boolean;
  setIsSimDrawerOpen: (payload: boolean) => void;

  signFormType: SIGN_FORM_VARIANTS;
  setSignFormType: (payload: SIGN_FORM_VARIANTS) => void;

  treeDrawerType: DRAWER_VARIANTS;
  setTreeDrawerType: (val: DRAWER_VARIANTS) => void;

  simDrawerType: DRAWER_VARIANTS;
  setSimDrawerType: (val: DRAWER_VARIANTS) => void;
}
