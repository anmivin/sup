import { ElementType, forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { StyledLink } from './Link.styled';

import { DefaultLinkProps } from './DefaultLink.types';

export const Link = forwardRef<HTMLAnchorElement, DefaultLinkProps<ElementType>>(
  ({ href, children, component, color = 'link', ...rest }: DefaultLinkProps<ElementType>, ref) => {
    return (
      <StyledLink color={color} component={component || RouterLink} ref={ref} {...rest}>
        {children}
      </StyledLink>
    );
  },
);

export default Link;
