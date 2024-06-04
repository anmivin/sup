import { SerializedStyles } from '@mui/styled-engine';
import hexRgb from 'hex-rgb';
import { css } from 'ui/libs/material';

import { Alpha, opacity } from './common/opacity';
import { Color, ColorOptions, HoverEffectsProps } from './theme.types';

export const rgba = (rgb: string, alpha: Alpha): string => {
  const a = typeof alpha === 'number' ? alpha : opacity[alpha];
  return `rgba(${rgb},${a})`;
};
export const rgbaFromHex = (hex: string, alpha: Alpha): string => {
  const rgb = hexRgb(hex, { format: 'array' }).slice(0, -1).join(',');
  return rgba(rgb, alpha);
};
export const rgbaFromThemeColor = (themeColors: ColorOptions, colorName: Color, alpha: Alpha): string => {
  return rgbaFromHex(themeColors[colorName], alpha);
};

export const hoverEffectsFromThemeColor = (
  themeColors: ColorOptions,
  options: Partial<HoverEffectsProps> = {}
): SerializedStyles => {
  const { withBeforeElement } = options;

  return css`
    ${withBeforeElement &&
    css`
      &:before {
        content: '';
        display: block;
        position: absolute;
        inset: 0;
        transition: background-color 0.1s ease-out;
        background-color: transparent;
        pointer-events: none;
      }
    `}
    &:hover${withBeforeElement && ':before'} {
      background-color: ${themeColors.monoA50};
    }
    &:active${withBeforeElement && ':before'} {
      background-color: ${themeColors.monoA150};
    }
  `;
};
