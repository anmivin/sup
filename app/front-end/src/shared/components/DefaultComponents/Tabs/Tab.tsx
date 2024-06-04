import { FC } from 'react';

import { StyledTab } from './Tabs.styled';
import { TabProps } from './Tabs.types';

const Tab: FC<TabProps> = ({ label, children, ...rest }) => {
  return <StyledTab {...rest} label={label || children} role="tab" />;
};

export default Tab;
