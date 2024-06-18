import { Rating } from '@mui/material';

<<<<<<<< HEAD:app/front-end/src/shared/ui/DefaultRating.tsx
import { RatingFilledIcon, RatingIcon } from './Icons';
========
import { RatingFilledIcon, RatingIcon } from '@assets/icons';
>>>>>>>> 6cbc6e5eee862b78705b5d10943055aaa2f7996e:app/front-end/src/shared/ui/Rating/Rating.tsx

const DefaultRating = () => {
  return (
    <>
      <Rating
        max={10}
        precision={1}
        defaultValue={2}
        emptyIcon={<RatingIcon />}
        icon={<RatingFilledIcon color="mono100" />}
        onChange={(e, value) => console.log(value)}
      />
    </>
  );
};

export default DefaultRating;
