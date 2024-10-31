import { Box, Link } from '@mui/material';
import { useStore } from 'zustand';

import { WorldStore } from '@stores/World/World.store';

WorldStore.getState().getWorlds('sims_4');
const Worlds = () => {
  const { worlds, getWorldMap } = useStore(WorldStore);

  if (!worlds) return <>Loading</>;
  return (
    <>
      {worlds.map((world) => (
        <Link href={`world/${world.key}`} key={world.key}>
          <img
            src={`/sims4/towns/${world.icon}`}
            alt="Picture of the author"
            width="200"
            height="200"
            onClick={() => getWorldMap(world.key)}
          />
        </Link>
      ))}
    </>
  );
};
export default Worlds;
