import { Rating } from '@mui/material';

import { RatingFilledIcon, RatingIcon } from '@components/Icons';

const DefaultRating = () => {
  return <Rating precision={0.5} defaultValue={2} emptyIcon={<RatingIcon />} icon={<RatingFilledIcon />} />;
};

export default DefaultRating;
