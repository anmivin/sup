import { Box, Tab, Tabs, css, styled } from '@mui/material';

import { TabPanelProps } from '@components/Tabs/Tabs.types';

const fontStyles = css`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

export const StyledTabsContainer = styled(Tabs)``;

export const StyledTab = styled(Tab)`
  &.MuiButtonBase-root {
    ${fontStyles};
    height: ${({ theme }) => theme.spacing(12)};
    color: ${({ theme }) => theme.color.textLight};

    &.Mui-selected {
      color: ${({ theme }) => theme.color.textDark};
    }
    &.Mui-disabled {
      color: ${({ theme }) => theme.color.textMain};
    }
  }
`;

type StyledTabPanelProps = Omit<TabPanelProps, 'value' | 'index'>;

export const StyledTabPanel = styled(({ noPadding: _, ...rest }: StyledTabPanelProps) => (
  <Box {...rest} />
))<StyledTabPanelProps>`
  padding: ${({ theme, noPadding }) => theme.spacing(noPadding ? 0 : 3)};
`;
