import { useEffect, useMemo } from 'react';

import { Box } from '@mui/material';

import { WorldStore } from '@stores/World/World.store';

WorldStore.getState().getWorlds('sims_4');
const Worlds = () => {
  const { worlds, selectedWorld, getWorldMap } = WorldStore();

  const path = useMemo(() => {
    return selectedWorld?.lots.filter(({ coordinates }) => coordinates.length).map(({ coordinates }) => coordinates);
  }, [selectedWorld]);
  if (!worlds) return <>Loading</>;
  return (
    <>
      {worlds.map((world) => (
        <img
          src={`/sims4/towns/${world.icon}`}
          alt="Picture of the author"
          width="200"
          height="200"
          onClick={() => getWorldMap(world.key)}
        />
        /*         <Link href={{ pathname: 'worlds/[key]', query: { key: world.key } }} key={world.key}>
          
        </Link> */
      ))}

      {selectedWorld && (
        <Box sx={{ position: 'relative' }}>
          <svg width={1920} height={1080} viewBox={`0 0 ${1920} ${1080}`} style={{ position: 'absolute' }}>
            {path?.map((p, index) => (
              <path key={index} d={p} fill="lightBlue" fillOpacity={0.5} stroke="blue" strokeWidth={2} />
            ))}
          </svg>
          <img src={`/sims4/towns/maps/${selectedWorld.filledMap}.png`} alt="noimage" width="1920" height="1080" />
        </Box>
      )}
    </>
  );
};
export default Worlds;
