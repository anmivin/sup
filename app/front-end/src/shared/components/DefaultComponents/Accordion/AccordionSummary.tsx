import { ForwardedRef, forwardRef } from 'react';

import { Title } from '@components/DefaultComponents/Typography';
import { ChevronDownIcon } from '@components/Icons';

import { StyledAccordionSummary } from './Accordion.styled';

import { AccordionSummaryProps } from './Accordion.types';

export const AccordionSummary = forwardRef<HTMLDivElement, AccordionSummaryProps>(
  ({ children, title, ...rest }: AccordionSummaryProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <StyledAccordionSummary ref={ref} expandIcon={<ChevronDownIcon size={20} />} {...rest}>
        {children || (title ? <Title level={5}>{title}</Title> : null)}
      </StyledAccordionSummary>
    );
  },
);

AccordionSummary.displayName = 'AccordionSummary';
export default AccordionSummary;
