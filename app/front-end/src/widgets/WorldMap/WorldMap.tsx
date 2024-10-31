import { useMemo, useState } from 'react';
import { useParams } from 'react-router';

import { Box, Button } from '@mui/material';
import { useStore } from 'zustand';

import { WorldStore } from '@stores/World/World.store';

import { StyledSvgPath } from './WorldMap.styled';

import { Abilities, Can, CrudAbility } from '../../shared/ability/Ability';

const WorldMap = () => {
  const { selectedWorld, getWorldMap } = useStore(WorldStore);
  const [imgRef, setImgRef] = useState<HTMLDivElement | null>(null);
  const [selectedLot, setSelectedLot] = useState<string | null>(null);
  const { key } = useParams<{ key: string }>();

  const path = useMemo(() => {
    return selectedWorld?.lots.filter(({ svgPath }) => !!svgPath).map((lot) => ({ path: lot.svgPath, key: lot.key }));
  }, [selectedWorld]);

  const currentSizes = useMemo(() => {
    return {
      currentHeight: imgRef?.offsetHeight ?? 1,
      currentWidth: imgRef?.offsetWidth ?? 1,
    };
  }, [imgRef]);

  return (
    <>
      {!selectedWorld ? (
        <Button
          onClick={() => {
            key && getWorldMap(key);
          }}
        >
          загрузить
        </Button>
      ) : (
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Can do={CrudAbility.READ} on={Abilities.BUILDING}>
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
                  $selected={selectedLot === p.key}
                  onMouseOver={() => setSelectedLot(p.key)}
                  onMouseLeave={() => setSelectedLot(null)}
                  onClick={() => {}}
                />
              ))}
            </svg>
          </Can>

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
