import { Modal as MuiModal, Paper as MuiPaper, styled } from '@mui/material';

export const StyledModal = styled(MuiModal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(2, 0)};
  overflow-y: auto;
`;

export const StyledModalPaper = styled(MuiPaper)`
  overflow: auto;
  max-height: 100%;
  padding: ${({ theme }) => theme.spacing(2, 3)};
  border-radius: ${({ theme }) => theme.radius.sm};
`;
