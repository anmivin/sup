import { components } from '@api/Api';

export interface WorldStoreProps {
  worlds: components['schemas']['OutputWorldDto'][] | null;
  loadingWorlds: boolean;
  selectedWorld: components['schemas']['OutputWorldMapDto'] | null;
  loadingSelectedWorld: boolean;
  getWorlds: (payload: string) => void;
  getWorldMap: (payload: string) => void;
}
