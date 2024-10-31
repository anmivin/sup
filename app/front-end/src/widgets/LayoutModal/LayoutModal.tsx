import { MutableRefObject, useCallback, useRef, useState } from 'react';

import { getRoundedPosition } from '@helpers/functions';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material';
import Konva from 'konva';
import { uniqueId } from 'lodash';
import { useStore } from 'zustand';

import DrawLayout from '@entities/DrawLayout';
import DrawLayoutMenu from '@entities/DrawLayoutMenu';
import { MODE } from '@entities/DrawLayoutMenu/DrawLayoutMenu.types';

import { WorldStore } from '@stores/World/World.store';

import DefaultModal from '@ui/Modal';

import { Abilities, Can, CrudAbility } from '../../shared/ability/Ability';

const squareSize = 30;

const LayoutModal = () => {
  const { editBuilding } = useStore(WorldStore);

  const layerRef = useRef() as MutableRefObject<Konva.Layer>;

  const theme = useTheme();

  const [mode, setMode] = useState<MODE>(MODE.default);
  const [currentRect, setCurrentRect] = useState<string | null>(null);

  const onNodeClick = useCallback(
    (newItem: Konva.Rect, transformer: Konva.Transformer) => {
      if (mode === MODE.erase) {
        newItem.destroy();
        transformer.destroy();
      } else setCurrentRect(newItem.id());
    },
    [mode],
  );

  const handleAddRect = useCallback(
    (sizes: { x: number; y: number }) => {
      const layer = layerRef.current;

      const newItem = new Konva.Rect({
        width: squareSize * sizes.x,
        height: squareSize * sizes.y,
        draggable: true,
        stroke: theme.color.blue900,
        fill: theme.color.blue500,
        id: uniqueId(),
      });

      const transformer = new Konva.Transformer({
        nodes: [newItem],
        rotationSnaps: [0, 45, 90, 135, 180, 225, 270, 315, 360],
        rotationSnapTolerance: 22.5,
        resizeEnabled: false,
        rotateAnchorOffset: 2,
        borderEnabled: false,
      });

      newItem.on('dragmove', () => {
        const position = getRoundedPosition({ x: newItem.x(), y: newItem.y() }, squareSize);
        newItem.x(position.x);
        newItem.y(position.y);
      });

      newItem.on('click', () => onNodeClick(newItem, transformer));

      layer.add(newItem);
      layer.add(transformer);
      console.log(newItem);
    },
    [mode],
  );

  const saveStage = useCallback(async () => {
    const layout = layerRef.current.toJSON();
    await editBuilding({ userId: '520e27ef-8b4f-4ba8-a374-3fcacdfd350a', layout: layout }, 'tututu');
  }, []);

  return (
    <DefaultModal header="Билдинг" open={true} onClose={() => {}}>
      <>
        <DrawLayout
          sizes={{ x: 20, y: 20 }}
          layerRef={layerRef}
          mode={mode}
          currentRect={currentRect}
          setCurrentRect={setCurrentRect}
        />
        <DrawLayoutMenu
          currentMode={mode}
          onAdd={handleAddRect}
          onChangeMode={(mode) => {
            setMode(mode);
            layerRef.current.batchDraw();
          }}
        />
        <Can do={CrudAbility.UPDATE} on={Abilities.BUILDING}>
          <Button onClick={saveStage}>кнопка</Button>
        </Can>
      </>
    </DefaultModal>
  );
};

export default LayoutModal;
