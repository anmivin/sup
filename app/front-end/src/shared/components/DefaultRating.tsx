import ViewStreamIcon from '@mui/icons-material/ViewStream';
import { Rating } from '@mui/material';

const DefaultRating = () => {
  return (
    <>
      <Rating
        precision={0.5}
        defaultValue={2}
        emptyIcon={<ViewStreamIcon sx={{ transform: 'rotate(90deg)' }} />}
        icon={
          <ViewStreamIcon
            sx={{
              transform: 'rotate(90deg)',
              color: 'text.primary',
            }}
          />
        }
      />
    </>
  );
};

export default DefaultRating;
