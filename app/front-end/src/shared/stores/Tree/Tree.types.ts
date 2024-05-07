import { components } from '@api/Api';

import { DrawerVariants } from '@constants/sharedTypes';

export interface TreeStateSliceProps {
  isTreeDrawerOpen: boolean;
  setIsTreeDrawerOpen: (val: boolean) => void;

  treeDrawerType: DrawerVariants;
  setTreeDrawerType: (val: DrawerVariants) => void;

  isSimDrawerOpen: boolean;
  setIsSimDrawerOpen: (val: boolean) => void;

  simDrawerType: DrawerVariants;
  setSimDrawerType: (val: DrawerVariants) => void;
}

export interface TreeDataSliceProps {
  defaultSims: [] | null;
  simsInTree: [] | null;
  trees: [] | null;

  getSimsForTree: (payload: number) => void;
  getSimsForUser: (payload: number) => void;
  getSim: (payload: string) => void;

  createTree: (payload: components['schemas']['InputTreeDto']) => void;
  editTree: (payload: components['schemas']['InputTreeDto']) => void;
  removeTree: (payload: number) => void;

  createSim: (payload: components['schemas']['InputSimDto']) => void;
  editSim: (payload: components['schemas']['InputSimDto']) => void;
  removeSim: (payload: number) => void;

  addPartner: () => void;
  removePartner: () => void;

  addChild: () => void;
  removeChild: () => void;

  addParent: () => void;
  removeParent: () => void;

  getDefaultSims: () => void;
}
