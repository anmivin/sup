import { Check } from '@constants/icons';

import { StyledCheckboxIcon } from './Checkbox.styled';

import { CheckboxIconProps } from './Checkbox.types';

export const CheckboxIcon = ({ checked }: CheckboxIconProps) => {
  return <StyledCheckboxIcon $checked={checked}>{checked && <Check />}</StyledCheckboxIcon>;
};

export default CheckboxIcon;
