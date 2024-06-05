import { styled } from '@mui/material';

export const DragAndDropZone = styled('button')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 6px solid ${({ theme }) => theme.color.textPrimary};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.transparentSuperlight};
  cursor: pointer;
  transition: background 0.3s ease-out;

  &:hover {
    background: ${({ theme }) => theme.color.transparentMedium};
  }
`;
