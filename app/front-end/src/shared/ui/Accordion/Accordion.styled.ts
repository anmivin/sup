import { Accordion, AccordionDetails, AccordionSummary, styled } from '@mui/material';

export const StyledAccordion = styled(Accordion)`
  padding: ${({ theme }) => theme.spacing(2)};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  background-color: ${({ theme }) => theme.color.primaryLight};
  box-shadow: none;
  &.Mui-disabled {
    background-color: ${({ theme }) => theme.color.primaryDark};
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  justify-content: flex-start;
  &:hover {
    box-shadow: inset 1px 1px 4px ${({ theme }) => theme.color.secondaryMain};
  }
  .MuiAccordionSummary-expandIconWrapper {
    margin: ${({ theme }) => theme.spacing(0, 2)};
  }
  .MuiAccordionSummary-content {
    margin: 0;
    flex-grow: 0;
    align-items: center;
  }
`;
export const StyledAccordionDetails = styled(AccordionDetails)``;
