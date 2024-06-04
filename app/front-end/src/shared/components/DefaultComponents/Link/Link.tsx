import { ElementType, forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Link as MuiLink } from '@mui/material';

import { LinkProps } from './Link.types';

export const Link = forwardRef<HTMLAnchorElement, LinkProps<ElementType>>(
  ({ href, to = '#', children, component, color = 'link', ...rest }: LinkProps<ElementType>, ref) => {
    return (
      <MuiLink color={color} component={component || RouterLink} ref={ref} to={href ?? to} {...rest}>
        {children}
      </MuiLink>
    );
  }
);

Link.displayName = 'Link';
export default Link;
