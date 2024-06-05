import { Box, IconButton, Modal, styled } from '@mui/material';

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  .MuiBackdrop-root {
    background: ${({ theme }) => theme.color.secondaryDark};
  }
`;

export const ModalContent = styled(Box)`
  border-radius: 12px;
  width: fit-content;
  padding: 20px;
  max-width: 650px;
  background: ${({ theme }) => theme.color.primaryMain};
`;

export const StyledIconButton = styled(IconButton)``;
