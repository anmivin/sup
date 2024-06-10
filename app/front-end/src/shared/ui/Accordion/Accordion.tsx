import { ForwardedRef, forwardRef } from 'react';

import { StyledAccordion } from './Accordion.styled';
import { AccordionProps } from './Accordion.types';

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, elevation = 0, disableGutters = true, ...rest }: AccordionProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <StyledAccordion ref={ref} elevation={elevation} disableGutters={disableGutters} {...rest}>
        {children}
      </StyledAccordion>
    );
  }
);

Accordion.displayName = 'Accordion';

export default Accordion;
