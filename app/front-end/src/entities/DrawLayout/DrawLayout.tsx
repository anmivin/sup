import { MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Layer, Line, Rect, Stage } from 'react-konva';

import { getRoundedPosition } from '@helpers/functions';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import Konva from 'konva';

import { MODE } from '@entities/DrawLayoutMenu/DrawLayoutMenu.types';

import { PositionProps } from '@type/interfaces';

import { DrawLayoutProps } from './DrawLayout.types';

const squareSize = 30;

const DrawLayout = ({ sizes, layerRef, mode, currentRect, setCurrentRect }: DrawLayoutProps) => {
  const [initialPosition, setInitialPosistion] = useState<PositionProps | null>(null);
  const theme = useTheme();

  const stageRef = useRef() as MutableRefObject<Konva.Stage>;

  const gridRef = useRef() as MutableRefObject<Konva.Layer>;

  const calculateLines = useMemo(() => {
    const linesArray = [];

    for (let w = 0; w <= sizes.x; w++) {
      for (let h = 0; h <= sizes.y; h++) {
        linesArray.push({
          points: [squareSize * w, 0, squareSize * w, squareSize * sizes.y],
          stroke: theme.color.mono100,
        });
        linesArray.push({
          points: [0, squareSize * h, squareSize * sizes.x, squareSize * h],
          stroke: theme.color.mono100,
        });
      }
    }

    return linesArray;
  }, [sizes]);

  const handleMouseDown = useCallback(
    (e: Konva.KonvaEventObject<MouseEvent>) => {
      if (mode !== MODE.draw) return;
      const position = getRoundedPosition({ x: e.evt.layerX, y: e.evt.layerY }, squareSize);
      setInitialPosistion(position);
    },
    [mode],
  );

  const getDrawingLine = () => {
    const layer = layerRef.current;
    const currentLines = layer.getChildren();
    return currentLines.find((item) => item.id() === 'drawing') as Konva.Line | undefined;
  };

  const getItemById = (id: string) => {
    const layer = layerRef.current;
    const currentLines = layer.getChildren();
    return currentLines.find((item) => item.id() === id) as Konva.Rect | undefined;
  };

  const handleMouseMove = useCallback(
    (e: Konva.KonvaEventObject<MouseEvent>) => {
      const layer = layerRef.current;
      if (!initialPosition || mode !== MODE.draw) {
        return;
      }

      const position = getRoundedPosition({ x: e.evt.layerX, y: e.evt.layerY }, squareSize);
      const existing = getDrawingLine();

      if (!existing) {
        const line = new Konva.Line({
          id: 'drawing',
          stroke: theme.color.mono900,
          listening: false,
          points: [initialPosition.x, initialPosition.y, position.x, position.y],
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
    [mode, initialPosition],
  );

  const handleMouseUp = useCallback(() => {
    const existing = getDrawingLine();
    if (!existing || mode !== MODE.draw) return;
    existing.id(`${Date.now()}`);
    setInitialPosistion(null);
  }, [mode]);

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
      <Stage ref={stageRef} id="container" width={1000} height={800}>
        <Layer ref={gridRef}>
          {calculateLines.map((line, index) => (
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
    </Box>
  );
};

export default DrawLayout;
