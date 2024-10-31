import { useStore } from 'zustand';

import LayoutModal from '@widgets/LayoutModal/LayoutModal';
import WorldMap from '@widgets/WorldMap';

import { WorldStore } from '@stores/World/World.store';

const World = () => {
  const { loadingSelectedWorld } = useStore(WorldStore);
  return (
    <>
      {loadingSelectedWorld ? (
        <></>
      ) : (
        <>
          <WorldMap />
          <LayoutModal />
        </>
      )}
    </>
  );
};

export default World;
