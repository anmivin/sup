import { Box, styled } from '@mui/material';

export const DropContainer = styled(Box)<{ $isActive: boolean }>`
  & > * {
    pointer-events: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme, $isActive }) =>
    $isActive ? theme.color.transparentDark300 : theme.color.transparentDark100};
  transition: background 0.3s ease-out;

  &:hover {
    background: ${({ theme }) => theme.color.transparentDark300};
  }
  &:focus {
    background: ${({ theme }) => theme.color.transparentDark300};
  }
  &:active {
    background: ${({ theme }) => theme.color.transparentDark300};
  }
`;
