import { Rating } from '@mui/material';

import { RatingFilledIcon, RatingIcon } from '../ui/Icons';

const DefaultRating = () => {
  return (
    <>
      <Rating
        max={10}
        precision={1}
        defaultValue={2}
        emptyIcon={<RatingIcon />}
        icon={<RatingFilledIcon color="backgroundPaper" />}
        onChange={(e, value) => console.log(value)}
      />
    </>
  );
};

export default DefaultRating;
