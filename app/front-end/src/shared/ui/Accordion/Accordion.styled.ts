import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAccordion = styled(MuiAccordion)`
  padding: ${({ theme }) => theme.spacing(2)};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};

  &.Mui-disabled {
    background-color: ${({ theme }) => theme.color.primaryDark};
  }
`;

export const StyledAccordionSummary = styled(MuiAccordionSummary)`
  justify-content: flex-start;
  .MuiAccordionSummary-expandIconWrapper {
    margin: ${({ theme }) => theme.spacing(0, 2)};
  }
  .MuiAccordionSummary-content {
    margin: 0;
    flex-grow: 0;
    align-items: center;
  }
`;
export const StyledAccordionDetails = styled(MuiAccordionDetails)``;
