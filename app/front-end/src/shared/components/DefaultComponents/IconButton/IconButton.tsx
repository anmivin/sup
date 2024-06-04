import { ForwardedRef, forwardRef } from 'react';

import { Button } from '@mui/material';

import { IconButtonProps } from './IconButton.types';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, variant = 'text', ...rest }: IconButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return <Button ref={ref} startIcon={children} variant={variant} {...rest} />;
  },
);

IconButton.displayName = 'IconButton';
export default IconButton;
