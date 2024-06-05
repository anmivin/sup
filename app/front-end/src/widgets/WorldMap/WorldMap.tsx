import { useEffect, useMemo, useState } from 'react';

import { Box } from '@mui/material';
import clsx from 'clsx';

import Loader from '@entities/Loader';

import { WorldStore } from '@stores/World/World.store';

import { StyledSvgPath } from './WorldMap.styles';

const WorldMap = () => {
  const { selectedWorld, loadingSelectedWorld } = WorldStore();
  const [imgRef, setImgRef] = useState<HTMLDivElement | null>(null);
  const [selectedLot, setSelectedLot] = useState<string | null>(null);

  const path = useMemo(() => {
    return selectedWorld?.lots
      .filter(({ coordinates }) => coordinates.length)
      .map((lot) => ({ path: lot.coordinates, key: lot.key }));
  }, [selectedWorld]);

  const currentSizes = useMemo(() => {
    return {
      currentHeight: imgRef?.offsetHeight ?? 1,
      currentWidth: imgRef?.offsetWidth ?? 1,
    };
  }, [imgRef]);

  useEffect(() => {
    console.log(imgRef?.clientHeight);
    console.log(imgRef?.offsetHeight);
  }, [imgRef]);

  if (loadingSelectedWorld) return <Loader />;
  return (
    <>
      {!selectedWorld ? (
        <>sdfs</>
      ) : (
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <svg
            width={currentSizes.currentWidth}
            height={currentSizes.currentHeight}
            viewBox={`0 0 ${1920} ${1080}`}
            style={{ position: 'absolute' }}
          >
            {path?.map((p, index) => (
              <StyledSvgPath
                key={index}
                d={p.path}
                className={clsx(selectedLot === p.key && 'isSelected')}
                onMouseOver={() => setSelectedLot(p.key)}
                onMouseLeave={() => setSelectedLot(null)}
                onClick={() => {}}
              />
            ))}
          </svg>

          <img
            ref={setImgRef}
            src={`/sims4/towns/maps/${selectedWorld.filledMap}.png`}
            alt="Picture of the author"
            width={1920}
            height={1080}
            /*           sizes="100vw"
            style={{ width: 'auto', height: 'auto' }} */
          />
        </Box>
      )}
    </>
  );
};
export default WorldMap;
