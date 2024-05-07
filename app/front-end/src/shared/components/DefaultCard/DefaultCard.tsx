import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import { StyledBox } from './DefaultCard.styled';

import { DefaultCardProps } from './DefaultCard.types';

const DefaultCard: FC<DefaultCardProps> = ({ label, description, image, width }) => {
  return (
    <StyledBox width={width}>
      {image && <img src={image.src} alt={image.alt} width={image.width} height={image.height} />}
      <Box>
        <Typography variant="subtitle2">{label}</Typography>
        {description && <Typography variant="body2">{description}</Typography>}
      </Box>
    </StyledBox>
  );
};
export default DefaultCard;
