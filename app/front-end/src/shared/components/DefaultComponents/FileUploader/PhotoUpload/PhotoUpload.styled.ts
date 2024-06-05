import { styled } from '@mui/material';

export const AddPhotoContainer = styled('button')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 6px solid ${({ theme }) => theme.color.textMain};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.transparentDark100};
  cursor: pointer;
  transition: background 0.3s ease-out;

  &:hover {
    background: ${({ theme }) => theme.color.transparentDark300};
  }
`;

export const ExistPhotoContainer = styled('button')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 6px solid ${({ theme }) => theme.color.textMain};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.transparentDark100};
  cursor: pointer;
  transition: background 0.3s ease-out;

  &:hover {
    background: ${({ theme }) => theme.color.transparentDark300};
  }
`;
