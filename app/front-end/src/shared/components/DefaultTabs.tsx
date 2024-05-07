import { Box, styled, Tabs, TabsProps } from '@mui/material';
import { ForwardedRef, forwardRef } from 'react';

export interface DefaultTabsProps extends TabsProps {
  adjustForPaperBox?: boolean;
}

const StyledTabs = styled(Tabs)`
  & .MuiButtonBase-root.Mui-selected {
    color: ${(props) => props.theme.color.primaryMain};
    background-color: ${(props) => props.theme.color.infoLight};
  }

  & .MuiButtonBase-root.Mui-disabled {
    color: ${(props) => props.theme.color.textSecondary};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.color.actionDisable};
    pointer-events: unset;
  }

  & .MuiButtonBase-root.tabWithErrors {
    color: ${(props) => props.theme.color.errorMain};
    background-color: ${(props) => props.theme.color.errorLight};
    border: 1px solid ${(props) => props.theme.color.errorMain};
  }
  min-height: 0;

  .MuiTab-root {
    background-color: ${(props) => props.theme.color.actionSelected};
    color: ${(props) => props.theme.color.textSecondary};
    text-transform: uppercase;
    font-size: 12px;
    line-height: 18px;
    border-radius: 24px;
    min-height: 0;
    min-width: 0;
    padding: 3px 12px;
  }

  .MuiTabs-scroller {
    display: flex;
    align-items: center;
  }

  .MuiTabs-flexContainer {
    gap: ${(props) => props.theme.spacing(1)};
  }

  .MuiTabs-indicator {
    display: none;
  }

  .MuiSvgIcon-root {
    color: ${(props) => props.theme.color.primaryMain};
  }
` as typeof Tabs;

const DefaultTabs = (
  { sx, className, adjustForPaperBox = true, ...tabsProps }: DefaultTabsProps,
  ref: ForwardedRef<any>,
) => {
  return (
    <Box ref={ref} sx={{ mx: adjustForPaperBox ? undefined : 0, ...sx }} className={className}>
      <StyledTabs {...tabsProps} />
    </Box>
  );
};

export default forwardRef(DefaultTabs);
