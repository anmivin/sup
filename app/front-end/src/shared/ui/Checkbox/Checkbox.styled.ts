import { Box, Checkbox, styled } from '@mui/material';

export const StyledCheckbox = styled(Checkbox)``;

export const StyledCheckboxIcon = styled(Box)<{ $checked?: boolean }>`
  display: block;
  width: 24px;
  height: 24px;
  border: ${({ theme }) => `1px solid ${theme.color.secondaryMain}`};
  border-radius: ${({ theme }) => theme.radius.md};
`;
