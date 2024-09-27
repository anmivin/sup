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

const squareSize = 30;

const LayoutModal = () => {
  const { editBuilding, getBuilding } = useStore(WorldStore);
  const stageRef = useRef() as MutableRefObject<Konva.Stage>;
  const layerRef = useRef() as MutableRefObject<Konva.Layer>;

  const theme = useTheme();

  const [mode, setMode] = useState<MODE>(MODE.default);
  const [currentRect, setCurrentRect] = useState<string | null>(null);

  const handleAddRect = (sizes: { x: number; y: number }) => {
    const onNodeClick = useCallback(
      (newItem: Konva.Rect, transformer: Konva.Transformer) => {
        if (mode === MODE.erase) {
          newItem.destroy();
          transformer.destroy();
        } else setCurrentRect(newItem.id());
      },
      [mode],
    );

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
  };

  const saveStage = useCallback(async () => {
    const layer = layerRef.current;
    const currline = layer.getChildren();
    const gh = layerRef.current.toJSON();
    const asd = currline.map((item) => item.attrs);
    console.log(gh);
    /*   console.log(asd); */
    const sa = await getBuilding('tututu');
    console.log(sa.layout);
    stageRef.current.add(Konva.Node.create(sa.layout), 'container');

    /* await editBuilding({ userId: '520e27ef-8b4f-4ba8-a374-3fcacdfd350a', lotId: 'lot_023', layout: gh }, 'tututu'); */
  }, []);

  return (
    <DefaultModal header="sdsadad" open={true} onClose={() => {}}>
      <>
        <DrawLayout sizes={{ x: 20, y: 20 }} />
        <DrawLayoutMenu
          onAdd={handleAddRect}
          onChangeMode={(mode) => {
            setMode(mode);
            layerRef.current.batchDraw();
          }}
        />
        <Button onClick={saveStage}>кнопка</Button>
      </>
    </DefaultModal>
  );
};

export default LayoutModal;
