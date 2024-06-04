import { ForwardedRef, forwardRef } from 'react';

import { Box, Tabs, TabsProps, styled } from '@mui/material';

export interface DefaultTabsProps extends TabsProps {
  adjustForPaperBox?: boolean;
}

const StyledTabs = styled(Tabs)`
  & .MuiButtonBase-root.Mui-selected {
    color: ${(props) => props.theme.color.textSecondary};
  }
` as typeof Tabs;

const DefaultTabs = ({ ...tabsProps }: DefaultTabsProps, ref: ForwardedRef<any>) => {
  return (
    <Box ref={ref}>
      <StyledTabs {...tabsProps} />
    </Box>
  );
};

export default forwardRef(DefaultTabs);
