import { ElementType, forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Link as MuiLink } from '@mui/material';

import { DefaultLinkProps } from './DefaultLink.types';

export const Link = forwardRef<HTMLAnchorElement, DefaultLinkProps<ElementType>>(
  ({ href, children, component, color = 'link', ...rest }: DefaultLinkProps<ElementType>, ref) => {
    return (
      <MuiLink color={color} component={component || RouterLink} ref={ref} {...rest}>
        {children}
      </MuiLink>
    );
  },
);

export default Link;
