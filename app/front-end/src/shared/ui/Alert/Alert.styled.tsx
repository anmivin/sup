import { Alert, styled } from '@mui/material';

import { ALERT_VARIANTS, AlertColorProps } from './Alert.types';

export const StyledAlert = styled(Alert)<{ $alertType: ALERT_VARIANTS }>`
  border-radius: ${({ theme }) => theme.radius.md};
  border: ${({ theme, $alertType }) => `1px solid ${theme.color[AlertColorProps[$alertType].color]}`};
  color: ${({ theme, $alertType }) => theme.color[AlertColorProps[$alertType].color]};
  background-color: ${({ theme, $alertType }) => theme.color[AlertColorProps[$alertType].background]};
  min-width: 280px;
  min-height: 56px;
  align-items: center;

  .MuiAlert-action {
    padding: 0 0 0 16px;
  }
`;
