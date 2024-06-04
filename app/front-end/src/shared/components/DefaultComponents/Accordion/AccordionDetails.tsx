import { ForwardedRef, forwardRef } from 'react';

import { StyledAccordionDetails } from './Accordion.styled';
import { AccordionDetailsProps } from './Accordion.types';

export const AccordionDetails = forwardRef<unknown, AccordionDetailsProps>(
  ({ children, ...rest }: AccordionDetailsProps, ref: ForwardedRef<unknown>) => {
    return (
      <StyledAccordionDetails ref={ref} {...rest}>
        {children}
      </StyledAccordionDetails>
    );
  }
);

AccordionDetails.displayName = 'AccordionDetails';
export default AccordionDetails;
