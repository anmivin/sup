import { Box, IconButton, Modal, styled } from '@mui/material';

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  .MuiBackdrop-root {
    background: ${({ theme }) => theme.color.transparentDark700};
  }
`;

export const ModalContent = styled(Box)`
  border-radius: 12px;
  width: fit-content;
  padding: ${({ theme }) => theme.spacing(4)};
  max-width: 650px;
  background: ${({ theme }) => theme.color.primaryMain};
`;

export const ModalHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledIconButton = styled(IconButton)``;
