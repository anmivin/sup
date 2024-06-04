import { ElementType } from 'react';

import { LinkProps } from '@mui/material/Link';

export interface DefaultLinkProps<T extends ElementType> extends LinkProps {
  component?: T;
}
