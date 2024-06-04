import { Components } from '@mui/material/styles';

import { commonComponents } from 'ui/theme/common/components';
import { color } from './color';

export const components: Components = {
  ...commonComponents(color),
  // MuiFormControl: {
  //   styleOverrides: {
  //     root: {
  //       fontSize: '16px',
  //     },
  //   },
  // },
};

export default components;
