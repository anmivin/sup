import { Dispatch, SetStateAction } from 'react';

export interface FiltersProps {
  hue: number | null;
  saturation: number | null;
  lightness: number | null;
  invert: boolean | null;
  sepia: boolean | null;
  grayscale: boolean | null;
}

export interface ImageFiltersMenuProps {
  setFilters: Dispatch<SetStateAction<FiltersProps>>;
}

export const filtersConstants = {
  hue: { min: 0, max: 259 },
  saturation: { min: -2, max: 10 },
  lightness: { min: 0, max: 100 },
};

//@TODO: пресеты
const presets = [
  {
    hue: { min: 0, max: 360 },
    saturation: { min: 0, max: 100 },
    laightness: { min: 0, max: 100 },
    red: { min: 0, max: 256 },
    green: { min: 0, max: 256 },
    blue: { min: 0, max: 256 },
  },
  {
    hue: { min: 0, max: 360 },
    saturation: { min: 0, max: 100 },
    laightness: { min: 0, max: 100 },
    red: { min: 0, max: 256 },
    green: { min: 0, max: 256 },
    blue: { min: 0, max: 256 },
  },
  {
    hue: { min: 0, max: 360 },
    saturation: { min: 0, max: 100 },
    laightness: { min: 0, max: 100 },
    red: { min: 0, max: 256 },
    green: { min: 0, max: 256 },
    blue: { min: 0, max: 256 },
  },
  {
    hue: { min: 0, max: 360 },
    saturation: { min: 0, max: 100 },
    laightness: { min: 0, max: 100 },
    red: { min: 0, max: 256 },
    green: { min: 0, max: 256 },
    blue: { min: 0, max: 256 },
  },
];
