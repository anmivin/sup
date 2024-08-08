import { Children, ForwardedRef, cloneElement, forwardRef, isValidElement, useMemo } from 'react';

import { StyledButton } from './Button.styled';

import { ButtonProps } from './Button.types';

import { DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_VARIANT } from './Button.constants';

const resizeIcon = (iconElement: ButtonProps['startIcon'], size: ButtonProps['size']) => {
  return Children.map(iconElement, (child) => {
    if (!isValidElement(child)) {
      return child;
    }
    return cloneElement(child, { size: child.props.size || (size === 'small' ? 20 : 24) } as object);
  })?.[0];
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = 'default',
      variant = DEFAULT_BUTTON_VARIANT,
      size = DEFAULT_BUTTON_SIZE,
      children,
      startIcon,
      endIcon,

      disabled = false,
      ...rest
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const startIconSized = useMemo(() => resizeIcon(startIcon, size), [startIcon, size]);
    const endIconSized = useMemo(() => resizeIcon(endIcon, size), [endIcon, size]);

    return (
      <>
        <StyledButton
          ref={ref}
          color={color}
          variant={variant}
          size={size}
          startIcon={startIconSized}
          endIcon={endIconSized}
          disabled={disabled}
          {...rest}
        >
          {children && <span className="buttonContentWrapper">{children}</span>}
        </StyledButton>
      </>
    );
  },
);

Button.displayName = 'Button';
export default Button;
