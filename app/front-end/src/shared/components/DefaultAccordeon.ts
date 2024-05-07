import { Accordion, AccordionSummary, styled } from '@mui/material';

export const StyledAccordion = styled(Accordion)`
  background-color: ${({ theme }) => theme.color.primaryLight};
  box-shadow: none;
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  &:hover {
    box-shadow: inset 1px 1px 4px ${({ theme }) => theme.color.secondaryMain};
  }
`;
