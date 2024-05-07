import { Box, IconButton, styled } from '@mui/material';

export const StyledBox = styled(Box)`
  margin-top: 16px;
  display: flex;
  height: 80vh;
  background-color: white;
  .react-flow__attribution {
    display: none;
  }
`;

export const StyledIconButton = styled(Box)`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${({ theme }) => theme.color.primaryMain};
  border: ${({ theme }) => `4px solid ${theme.color.errorMain}`};
`;

export const TheBox = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  height: 120px;
  width: 120px;
  background-color: ${({ theme }) => theme.color.primaryMain};
  padding: ${({ theme }) => theme.spacing(1)};
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 8px ${({ theme }) => theme.color.secondaryMain};
`;

export const Circle = styled(Box)`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${({ theme }) => theme.color.errorMain};
  position: absolute;
  top: 80px;
  left: 80px;
`;

export const StyledAddContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
  position: absolute;
  top: -76px;
  left: -76px;
  z-index: 3;
`;

export const Invis = styled(Box)`
  height: 120px;
  width: 120px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.primaryMain};
  opacity: 0.7;
`;

export const InnerIconButtom = styled(IconButton)`
  color: ${({ theme }) => theme.color.errorMain};
`;
