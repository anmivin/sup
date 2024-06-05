import { useCallback, useMemo, useState } from 'react';

import { clsx } from 'clsx';
import { uniqueId } from 'lodash';

import { StyledButton, StyledButtonGroup } from './ButtonToggle.styled';

import { ButtonToggleProps, OptionItem } from './ButtonToggle.types';

const ButtonToggle = <T extends string | number>({
  className,
  options,
  value,
  defaultValue = options[0],
  getOptionLabel,
  getOptionKey,
  onChange,
  buttonProps,
  ButtonGroupProps,
  disableRipple = true,
}: ButtonToggleProps<T>) => {
  const isControlled = useMemo(() => value !== undefined, [value]);
  const [innerValue, setInnerValue] = useState(defaultValue);
  const actualValue = useMemo(() => (isControlled ? value : innerValue), [innerValue, isControlled, value]);

  const optionItems = useMemo<OptionItem<T>[]>(
    () =>
      options.map((optionItem) => ({
        key: getOptionKey?.(optionItem) ?? uniqueId(),
        label: getOptionLabel?.(optionItem) ?? `${optionItem}`,
        value: optionItem,
      })),
    [getOptionKey, getOptionLabel, options],
  );

  const handleChange = useCallback(
    (value: T) => {
      onChange?.(value);

      if (!isControlled) {
        setInnerValue(value);
      }
    },
    [isControlled],
  );

  return (
    <StyledButtonGroup className={className} fullWidth size="large" disableRipple={disableRipple} {...ButtonGroupProps}>
      {optionItems.map((optionItem) => (
        <StyledButton
          {...(buttonProps || {})}
          key={optionItem.key}
          onClick={() => handleChange(optionItem.value)}
          className={clsx(actualValue === optionItem.value ? 'selected' : undefined, buttonProps?.className)}
        >
          {optionItem.label}
        </StyledButton>
      ))}
    </StyledButtonGroup>
  );
};

export default ButtonToggle;
