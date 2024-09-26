import { components } from '@api/Api';

export interface WorldStoreProps {
  worlds: components['schemas']['OutputWorldDto'][] | null;
  loadingWorlds: boolean;
  selectedWorld: components['schemas']['OutputWorldMapDto'] | null;
  loadingSelectedWorld: boolean;
  building: any;
  loadingBuilding: boolean;
  getWorlds: (payload: string) => void;
  getWorldMap: (payload: string) => void;
  getBuilding: (payload: string) => void;
  editBuilding: (payload: components['schemas']['InputBuildingDto'], key: string) => Promise<string>;
}
