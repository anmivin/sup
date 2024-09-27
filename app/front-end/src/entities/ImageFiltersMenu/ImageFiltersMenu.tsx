import { Checkbox, Slider, Typography } from '@mui/material';

const ImageFiltersMenu = () => {
  return (
    <>
      <Typography>брайтнес</Typography>
      <Slider onChangeCommitted={(e) => {}} />
      <Typography>р</Typography>
      <Slider />
      <Typography>г</Typography>
      <Slider />
      <Typography>б</Typography>
      <Slider />
      <Typography>инверт</Typography>
      <Checkbox />
      <Typography>чб</Typography>
      <Checkbox />
      <Typography>сепия</Typography>
      <Checkbox />
    </>
  );
};
export default ImageFiltersMenu;
