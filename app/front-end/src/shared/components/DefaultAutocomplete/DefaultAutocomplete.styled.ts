import { Autocomplete, Paper, styled } from '@mui/material';

export const StyledAutocomplete = styled(Autocomplete)`
  &.Mui-focused .MuiInputLabel-outlined {
    color: ${({ theme }) => theme.color.actionDisable};
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.color.textSecondary};
  }

  .MuiChip-root {
    background-color: ${({ theme }) => theme.color.secondaryMain};
    color: ${({ theme }) => theme.color.textPrimary};
  }
  & .MuiOutlinedInput-root .MuiAutocomplete-input {
    color: #000 !important;
  }
` as typeof Autocomplete;

export const StyledPaper = styled(Paper)`
  background-color: ${({ theme }) => theme.color.actionHover};
`;
