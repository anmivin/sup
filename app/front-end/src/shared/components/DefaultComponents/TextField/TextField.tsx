import { ChangeEvent, ForwardedRef, forwardRef, useCallback, useEffect, useMemo, useState } from 'react';

import { TextField as MuiTextField } from '@mui/material';
import { styled } from '@mui/material/styles';

import { TextFieldProps } from './TextField.types';

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      multiline,
      maxRows = 20,
      minRows = 1,
      rows,
      resizeBoth,
      sx,
      numeric = false,
      decimalPlaces = 0,
      ...rest
    }: TextFieldProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const regex = useMemo(() => new RegExp(`^-?\\d*\\.?\\d{0,${decimalPlaces}}$`), [decimalPlaces]);

    const [numericValue, setNumericValue] = useState<string>('');

    const handleChangeNumericValue = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        if (regex.test(inputValue)) {
          setNumericValue(inputValue);
        }
      },
      [regex]
    );

    const checkInitialNumericValue = useCallback(() => {
      if (!numeric) {
        return;
      }

      if (regex.test((rest.value as string) || '')) {
        setNumericValue(rest.value as string);
      } else {
        setNumericValue('');
      }
    }, [numeric, regex, rest.value]);

    useEffect(() => {
      checkInitialNumericValue();
    }, []);

    return (
      <StyledTextField
        ref={ref}
        onChange={numeric ? handleChangeNumericValue : undefined}
        maxRows={multiline && !rows ? maxRows : undefined}
        minRows={multiline && !rows ? minRows : undefined}
        multiline={multiline}
        rows={rows}
        sx={
          resizeBoth
            ? {
                textarea: {
                  resize: 'both',
                  minHeight: 20,
                  maxHeight: 200,
                },
                ...sx,
              }
            : sx
        }
        {...rest}
        value={numeric ? numericValue : rest.value}
      />
    );
  }
);

TextField.displayName = 'TextField';
export default TextField;

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  '& label.Mui-focused': {
    borderWidth: 2,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.color.monoA200,
    },
    '&:hover:not(.Mui-error):not(.Mui-disabled) fieldset': {
      borderWidth: 2,
      borderColor: theme.color.monoA200,
    },
    '&.Mui-focused:not(.Mui-error) fieldset': {
      borderColor: theme.color.primary,
    },
    '&.Mui-disabled fieldset': {
      borderColor: theme.color.monoA200,
    },
  },
  '& legend': {
    ...theme.typography.caption,
  },
}));
