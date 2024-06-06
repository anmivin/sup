import { StyledTab, StyledTabsContainer } from './Tabs.styled';

import { TabsProps } from './Tabs.types';

const Tabs = ({ children, tabs, onChange, ...rest }: TabsProps) => {
  return (
    <StyledTabsContainer role="tablist" {...rest}>
      {children
        ? children
        : tabs?.map((tab, i) => <StyledTab key={tab.label} value={i} onClick={() => onChange(i)} {...tab} />)}
    </StyledTabsContainer>
  );
};

export default Tabs;
