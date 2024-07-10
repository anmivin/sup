import { Autocomplete, Paper, styled } from '@mui/material';

export const StyledAutocomplete = styled(Autocomplete)`
  &.Mui-focused .MuiInputLabel-outlined {
    color: ${({ theme }) => theme.color.textMain};
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.color.textDark};
  }

  .MuiChip-root {
    background-color: ${({ theme }) => theme.color.secondaryMain};
    color: ${({ theme }) => theme.color.textMain};
  }
  & .MuiOutlinedInput-root .MuiAutocomplete-input {
    color: ${({ theme }) => `${theme.color.textMain} !important`};
  }
` as typeof Autocomplete;

export const StyledPaper = styled(Paper)`
  background-color: ${({ theme }) => theme.color.secondaryMain};
`;
