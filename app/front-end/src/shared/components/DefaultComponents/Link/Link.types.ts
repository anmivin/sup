import { ElementType } from 'react';

import { LinkProps as MuiLinkProps } from '@mui/material/Link';

export interface LinkProps<T extends ElementType> extends MuiLinkProps {
  /** используемый компонент */
  component?: T;

  /** @deprecated Адрес ссылки
   * @see href
   */
  to?: MuiLinkProps['href'];
}
