import { ForwardedRef, forwardRef } from 'react';

import { Box, TabsProps } from '@mui/material';

import { StyledTabs } from './DefaultTabs.styled';

export interface DefaultTabsProps extends TabsProps {
  adjustForPaperBox?: boolean;
}

const DefaultTabs = (
  { sx, className, adjustForPaperBox = true, ...tabsProps }: DefaultTabsProps,
  ref: ForwardedRef<any>,
) => {
  return (
    <Box ref={ref}>
      <StyledTabs {...tabsProps} />
    </Box>
  );
};

export default forwardRef(DefaultTabs);
