import { TextField, styled } from '@mui/material';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    borderWidth: 2,
    color: theme.color.backgroundDefault,
  },
  '& .MuiOutlinedInput-root': {
    color: '#000',
    '& fieldset': {
      borderColor: theme.color.infoDark,

      color: '#000',
    },
    '&:hover:not(.Mui-error) fieldset': {
      borderWidth: 2,
      borderColor: theme.color.infoDark,
    },
    '&.Mui-focused:not(.Mui-error) fieldset': {
      borderColor: theme.color.infoDark,
    },
  },

  '& .MuiInput-root': {
    color: '#000',
    '&:after': {
      borderColor: theme.color.infoDark,
    },
  },

  '& legend': {
    ...theme.typography.caption,
  },
}));
