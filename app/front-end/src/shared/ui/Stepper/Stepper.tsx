import { ForwardedRef, forwardRef } from 'react';

import { StyledStepper } from './Stepper.styled';

import { StepperProps } from './Stepper.types';

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  ({ ...rest }: StepperProps, ref: ForwardedRef<HTMLDivElement>) => {
    return <StyledStepper ref={ref} {...rest} />;
  },
);

Stepper.displayName = 'Stepper';

export default Stepper;
