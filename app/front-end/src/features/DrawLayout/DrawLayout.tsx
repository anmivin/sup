import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Layer, Line, Rect, Stage } from 'react-konva';

import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import Konva from 'konva';
import { uniqueId } from 'lodash';

import DrawLayoutMenu from '@entities/DrawLayoutMenu';
import { MODE } from '@entities/DrawLayoutMenu/DrawLayoutMenu.types';

import { PositionProps } from '@type/interfaces';

const squareSize = 30;
const sizes = { x: 20, y: 15 };
const DrawLayout = () => {
  const theme = useTheme();
  const [initPos, setInitPos] = useState<PositionProps | null>(null);
  const [mode, setMode] = useState<MODE>(MODE.default);
  const stageRef = useRef() as MutableRefObject<Konva.Stage>;
  const layerRef = useRef() as MutableRefObject<Konva.Layer>;
  const gridRef = useRef() as MutableRefObject<Konva.Layer>;
  const [currentRect, setCurrentRect] = useState<string | null>(null);

  const calc = () => {
    const arr = [];

    for (let w = 0; w <= sizes.x; w++) {
      for (let h = 0; h <= sizes.y; h++) {
        arr.push({
          points: [squareSize * w, 0, squareSize * w, squareSize * sizes.y],
          stroke: theme.color.mono100,
        });
        arr.push({
          points: [0, squareSize * h, squareSize * sizes.x, squareSize * h],
          stroke: theme.color.mono100,
        });
      }
    }

    return arr;
  };

  const getRoundedPosition = (position: PositionProps, interval: number) => {
    return {
      x: Math.round(position.x / interval) * interval,
      y: Math.round(position.y / interval) * interval,
    };
  };

  const handleMouseDown = useCallback(
    (e: Konva.KonvaEventObject<MouseEvent>) => {
      if (mode !== MODE.draw) return;
      const position = getRoundedPosition({ x: e.evt.layerX, y: e.evt.layerY }, squareSize);
      setInitPos(position);
    },
    [mode],
  );

  const getDrawingLine = () => {
    const layer = layerRef.current;
    const currline = layer.getChildren();
    return currline.find((item) => item.id() === 'drawing') as Konva.Line | undefined;
  };

  const getItemById = (id: string) => {
    const layer = layerRef.current;
    const currline = layer.getChildren();
    return currline.find((item) => item.id() === id) as Konva.Rect | undefined;
  };

  const handleMouseMove = useCallback(
    (e: Konva.KonvaEventObject<MouseEvent>) => {
      const layer = layerRef.current;
      if (!initPos || mode !== MODE.draw) {
        return;
      }

      const position = getRoundedPosition({ x: e.evt.layerX, y: e.evt.layerY }, squareSize);
      const existing = getDrawingLine();

      if (!existing) {
        const line = new Konva.Line({
          id: 'drawing',
          stroke: theme.color.mono900,
          listening: false,
          points: [initPos.x, initPos.y, position.x, position.y],
        });
        layer.add(line);
      } else {
        const points = existing.points().slice();
        points[2] = position.x;
        points[3] = position.y;
        existing.points(points);
        layer.batchDraw();
      }
    },
    [mode, initPos],
  );

  const handleMouseUp = useCallback(() => {
    const existing = getDrawingLine();
    if (!existing || mode !== MODE.draw) return;
    existing.id(`${Date.now()}`);
    setInitPos(null);
  }, [mode]);

  const onNodeClick = useCallback(
    (newItem: Konva.Rect, transformer: Konva.Transformer) => {
      if (mode === MODE.erase) {
        newItem.destroy();
        transformer.destroy();
      } else setCurrentRect(newItem.id());
    },
    [mode],
  );

  const handleAddRect = (sizes: { x: number; y: number }) => {
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
  const getMode = (mode: MODE) => {
    switch (mode) {
      case MODE.draw: {
        return 'crosshair';
      }
      case MODE.erase: {
        return 'pointer';
      }
      default: {
        return 'default';
      }
    }
  };
  useEffect(() => {
    stageRef.current.container().style.cursor = getMode(mode);
  }, [mode]);
  return (
    <Box display="flex" gap={4}>
      <Stage ref={stageRef} width={1000} height={800}>
        <Layer ref={gridRef}>
          {calc().map((line, index) => (
            <Line key={index} points={line.points} stroke={line.stroke} strokeWidth={1} />
          ))}
        </Layer>
        <Layer ref={layerRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
          <Rect width={sizes.x * squareSize} height={sizes.y * squareSize} fill={theme.color.transparentDark200} />
        </Layer>
      </Stage>
      {currentRect && (
        <>
          <input
            type="color"
            onChange={(e) => {
              const rect = getItemById(currentRect);
              if (rect) rect?.stroke(e.target.value);
            }}
            onBlur={() => setCurrentRect(null)}
          />
          <input
            type="color"
            onChange={(e) => {
              const rect = getItemById(currentRect);
              if (rect) rect?.fill(e.target.value);
            }}
            onBlur={() => setCurrentRect(null)}
          />
        </>
      )}

      <DrawLayoutMenu
        onAdd={handleAddRect}
        onChangeMode={(mode) => {
          setMode(mode);
          layerRef.current.batchDraw();
        }}
      />
    </Box>
  );
};

export default DrawLayout;
