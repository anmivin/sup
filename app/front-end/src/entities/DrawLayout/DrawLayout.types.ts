import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import Konva from 'konva';

import { MODE } from '@entities/DrawLayoutMenu/DrawLayoutMenu.types';

import { PositionProps } from '@type/interfaces';

export interface DrawLayoutProps {
  sizes: PositionProps;
  layerRef: MutableRefObject<Konva.Layer>;
  mode: MODE;
  currentRect: string | null;
  setCurrentRect: Dispatch<SetStateAction<string | null>>;
}
