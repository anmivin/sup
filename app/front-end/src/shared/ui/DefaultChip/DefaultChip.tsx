import { ChipProps } from '@mui/material';
import { forwardRef } from 'react';

import { StyledChip } from './DefaultChip.styled';

const DefaultChip = forwardRef<HTMLInputElement, ChipProps>((props, ref) => {
  return (
    <StyledChip ref={ref} {...props}>
      {props.children}
    </StyledChip>
  );
});

DefaultChip.displayName = 'DefaultChip';

export default DefaultChip;
