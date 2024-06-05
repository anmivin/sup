import { StyledTab } from './Tabs.styled';

import { TabProps } from './Tabs.types';

const Tab = ({ label, children, ...rest }: TabProps) => {
  return <StyledTab {...rest} label={label || children} role="tab" />;
};

export default Tab;
