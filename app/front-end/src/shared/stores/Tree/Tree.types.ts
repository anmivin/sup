import { AxiosRequestConfig } from 'axios';

import { components } from '@api/Api';

export interface TreeStateSliceProps {
  currentTree: components['schemas']['OutputTreeListDto'] | null;
  setCurrentTree: (payload: components['schemas']['OutputTreeListDto'] | null) => void;
}

export interface TreeDataSliceProps {
  defaultSims: [] | null;
  simsInTree: [] | null;
  trees: components['schemas']['OutputTreeListDto'][] | null;
  treesPending: boolean;

  getSimsForTree: (payload: number) => void;
  getSimsForUser: (payload: number) => void;
  getSim: (payload: string) => void;
  getTreesForUser: () => void;

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

  saveImage: (
    payload: components['schemas']['Debug'],
    type: string,
    config?: AxiosRequestConfig,
  ) => Promise<components['schemas']['FileResponseDTO'] | undefined>;
  editImage: (payload: components['schemas']['EditFileDto']) => void;
  deleteImage: (payload: components['schemas']['DeleteFileDto']) => void;
}
