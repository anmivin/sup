import { ReactNode } from 'react';

import { TabProps as MuiTabProps } from '@mui/material/Tab';
import { TabsProps as MuiTabsProps } from '@mui/material/Tabs';

import { BoxProps } from '@components/DefaultComponents/Box/Box.types';

interface ArrayOfTabs extends Partial<MuiTabProps> {
  label: string;
}

type TabsPropsVariant1 = {
  tabs: ArrayOfTabs[];
  onChange: (i: number) => void;
  children?: never;
};
type TabsPropsVariant2 = {
  tabs?: never;
  onChange?: never;
  children: ReactNode;
};

export type TabsProps = Omit<MuiTabsProps, 'onChange' | 'children'> & (TabsPropsVariant1 | TabsPropsVariant2);

export interface TabProps extends Omit<MuiTabProps, 'children'> {
  children?: ReactNode;
}

export interface TabPanelProps extends BoxProps {
  id?: string;
  index: number;
  value: number;
  noPadding?: boolean;
}
