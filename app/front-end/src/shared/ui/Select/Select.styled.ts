import MuiSelect from '@mui/material/Select';
import { css, styled } from '@mui/material/styles';

export const StyledSelect = styled(MuiSelect)(
  ({ theme }) => css`
    &.MuiInputBase-root .MuiSelect-select {
      min-height: ${theme.spacing(6)};
      line-height: ${theme.spacing(6)};
      padding: ${theme.spacing(4, 3.5)};
    }

    &.MuiOutlinedInput-root {
      & fieldset {
        border-color: ${theme.color.monoA200};
      }
      &:hover:not(.Mui-error):not(.Mui-disabled) fieldset {
        border-width: 2px;
        border-color: ${theme.color.monoA200};
      }
      &.Mui-focused:not(.Mui-error) fieldset {
        border-color: ${theme.color.primary};
      }
      &.Mui-disabled fieldset {
        border-color: ${theme.color.monoA200};
      }
    }
  `
) as unknown as typeof MuiSelect;
