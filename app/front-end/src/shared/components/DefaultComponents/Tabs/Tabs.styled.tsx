import { Tab, Tabs } from '@mui/material';
import { css, styled } from '@mui/material/styles';

import Box from '@components/DefaultComponents/Box';
import { TabPanelProps } from '@components/DefaultComponents/Tabs/Tabs.types';

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
    color: ${({ theme }) => theme.color.monoA700};

    &.Mui-selected {
      color: ${({ theme }) => theme.color.monoA900};
    }
    &.Mui-disabled {
      color: ${({ theme }) => theme.color.monoA500};
    }
  }
`;

type StyledTabPanelProps = Omit<TabPanelProps, 'value' | 'index'>;

export const StyledTabPanel = styled(({ noPadding: _, ...rest }: StyledTabPanelProps) => (
  <Box {...rest} />
))<StyledTabPanelProps>`
  padding: ${({ theme, noPadding }) => theme.spacing(noPadding ? 0 : 3)};
`;
