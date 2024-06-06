export enum ButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
  xl = 'xl',
  xxl = 'xxl',
}
export enum ButtonVariant {
  outlined = 'outlined',
  contained = 'contained',
  text = 'text',
}
export enum ButtonColor {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary',
  error = 'error',
}
export const buttonSizeMap = {
  [ButtonSize.small]: 24,
  [ButtonSize.medium]: 32,
  [ButtonSize.large]: 40,
  [ButtonSize.xl]: 48,
  [ButtonSize.xxl]: 56,
};

export const DEFAULT_BUTTON_SIZE = ButtonSize.large;
export const DEFAULT_BUTTON_VARIANT = ButtonVariant.outlined;
