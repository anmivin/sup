import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Group, Image, Layer, Line, Rect, Stage, Transformer } from 'react-konva';

import Konva from 'konva';
import useImage from 'use-image';

import { CropImageProps } from './CropImage.types';

const initSize = 300;
const initPos = { x: 50, y: 50 };

const CropImage = ({ url, onCrop }: CropImageProps) => {
  const [selected, setSelected] = useState(false);
  const [image] = useImage(url);
  const cropRef = useRef() as MutableRefObject<Konva.Group>;

  const rectRef = useRef() as MutableRefObject<Konva.Rect>;

  const layerRef = useRef() as MutableRefObject<Konva.Layer>;

  const imageRef = useRef() as MutableRefObject<Konva.Image>;

  const trRef = useRef() as MutableRefObject<Konva.Transformer>;

  useEffect(() => {
    if (selected) {
      trRef.current?.nodes([cropRef.current]);
      trRef.current?.getLayer()?.batchDraw();
    }
  }, [selected]);

  useEffect(() => {
    if (image) {
      // you many need to reapply cache on some props changes like shadow, stroke, etc.
      imageRef.current.cache();
    }
  }, [image]);

  const handleCrop = () => {
    const cropNode = cropRef.current;
    const rectNode = rectRef.current;
    const imageNode = imageRef.current;
    const imageX = cropNode.x();
    const imageY = cropNode.y();
    const cropWidth = rectNode.width() * cropNode.scaleX();
    const cropHeight = rectNode.height() * cropNode.scaleY();

    onCrop(
      imageNode.toDataURL({
        x: imageX,
        y: imageY,
        width: cropWidth,
        height: cropHeight,
      }),
    );
  };

  const getLines = useCallback((size: number) => {
    const arr = [];
    const squareSize = size / 3;

    for (let i = 0; i <= 3; i++) {
      arr.push({
        points: [squareSize * i, 0, squareSize * i, size],
        stroke: '#000',
        strokeWidth: 1,
      });
      arr.push({
        points: [0, squareSize * i, size, squareSize * i],
        stroke: '#000',
        strokeWidth: 1,
      });
    }

    return arr;
  }, []);

  const setFilters = () => {
    const node = imageRef.current;
    node.cache();
    node.filters([Konva.Filters.RGB]);
    node.blue(120);
    node.green(200);
    node.red(200);
    node.filters([Konva.Filters.Blur]);
    node.blurRadius(10);
    node.filters([Konva.Filters.Brighten]);
    node.brightness(0.1);
    node.filters([Konva.Filters.Contrast]);
    node.contrast(20);
    node.filters([Konva.Filters.Grayscale]);
    node.filters([Konva.Filters.HSL]);
    node.luminance(0.8);
    node.filters([Konva.Filters.Invert]);
    node.filters([Konva.Filters.Sepia]);
    node.filters([]);
  };
  return (
    <>
      <Stage width={600} height={600}>
        <Layer ref={layerRef}>
          <Image ref={imageRef} image={image} y={0} x={0} strokeWidth={1} stroke={'black'} />
        </Layer>
        <Layer>
          <Rect width={600} height={600} x={0} y={0} fill="rgba(243, 67, 178, 0.7)" />
          <Group ref={cropRef} draggable x={initPos.x} y={initPos.y}>
            <Rect
              id="cropWindow"
              ref={rectRef}
              width={initSize}
              height={initSize}
              fill="#000"
              globalCompositeOperation="destination-out"
              onClick={() => setSelected((prev) => !prev)}
            />
            {getLines(initSize).map((line) => (
              <Line points={line.points} stroke={line.stroke} strokeWidth={1} />
            ))}
          </Group>

          <Transformer
            ref={trRef}
            rotateEnabled={false}
            centeredScaling={true}
            enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
            borderEnabled={false}
            flipEnabled={false}
            anchorSize={12}
            anchorFill="lightBlue"
            anchorCornerRadius={6}
            boundBoxFunc={(oldBox, newBox) => {
              if (newBox.width < 60 || newBox.height < 60) {
                return oldBox;
              }
              return newBox;
            }}
          />
        </Layer>
      </Stage>
      <button onClick={handleCrop}>crop</button>
    </>
  );
};

export default CropImage;
