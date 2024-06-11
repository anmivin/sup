import { Box, Tooltip, styled } from '@mui/material';
import { ReactNode } from 'react';

const StyleTooltip = styled(Tooltip)`
  .tooltip {
    color: lightblue;
    background-color: green;
  }
`;

export interface CustomTooltipProps {
  children: ReactNode;
  title?: string;
}
const CustomTooltip = ({ children, title }: CustomTooltipProps) => {
  return (
    <StyleTooltip title={title} arrow placement="top">
      <Box>{children}</Box>
    </StyleTooltip>
  );
};
export default CustomTooltip;
