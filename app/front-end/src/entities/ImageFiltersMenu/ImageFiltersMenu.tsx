import { Checkbox, Slider, Typography } from '@mui/material';

import { filtersConstants } from './ImageFiltersMenu.types';
import { ImageFiltersMenuProps } from './ImageFiltersMenu.types';

const ImageFiltersMenu = ({ setFilters }: ImageFiltersMenuProps) => {
  return (
    <>
      <Typography>lightness</Typography>
      <Slider
        min={filtersConstants.lightness.min}
        max={filtersConstants.lightness.max}
        onChangeCommitted={(_e, value) => {
          const newValue = Array.isArray(value) ? value[0] : value;
          setFilters((prev) => ({ ...prev, lightness: newValue }));
        }}
      />
      <Typography>saturation</Typography>
      <Slider
        min={filtersConstants.saturation.min}
        max={filtersConstants.saturation.max}
        onChangeCommitted={(_e, value) => {
          const newValue = Array.isArray(value) ? value[0] : value;
          setFilters((prev) => ({ ...prev, saturation: newValue }));
        }}
      />
      <Typography>hue</Typography>
      <Slider
        min={filtersConstants.hue.min}
        max={filtersConstants.hue.max}
        onChangeCommitted={(_e, value) => {
          const newValue = Array.isArray(value) ? value[0] : value;
          setFilters((prev) => ({ ...prev, hue: newValue }));
        }}
      />
      <Typography>инверт</Typography>
      <Checkbox onChange={(_e, checked) => setFilters((prev) => ({ ...prev, invert: checked }))} />
      <Typography>чб</Typography>
      <Checkbox onChange={(_e, checked) => setFilters((prev) => ({ ...prev, grayscale: checked }))} />
      <Typography>сепия</Typography>
      <Checkbox onChange={(_e, checked) => setFilters((prev) => ({ ...prev, sepia: checked }))} />
    </>
  );
};
export default ImageFiltersMenu;
