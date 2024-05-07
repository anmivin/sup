import { StyledSelect } from './DefaultSelect.styled';

import { DefaultSelectProps } from './DefaultSelect.types';

const DefaultSelect = ({ children, ...props }: DefaultSelectProps) => {
  return <StyledSelect {...props}>{children}</StyledSelect>;
};

export default DefaultSelect;
