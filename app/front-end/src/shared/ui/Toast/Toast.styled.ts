import { Alert, AlertProps, Box, Button, Portal, Typography, styled } from '@mui/material';

export const StyledAlert = styled(Alert)`
  padding: 14px 13px 14px 18px;
  font-weight: 500;
  .MuiAlert-icon {
    min-width: 22px;
  }
  .MuiAlert-action {
    margin-right: 0;
    display: flex;
    padding: 0;
    flex-grow: 1;
    align-items: center;
    .MuiButtonBase-root {
      min-width: 30px;
    }
  }
  .MuiAlert-message {
    margin-right: 12px;
    overflow: hidden;
    flex-grow: 1;
  }
  &.MuiAlert-filledInfo {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
  &.MuiAlert-outlinedInfo {
    border-color: ${(props) => props.theme.palette.primary.main};
    .MuiAlert-icon {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }
  &.MuiAlert-outlinedWarning {
    border-color: ${(props) => props.theme.palette.warning.main};
    .MuiAlert-icon {
      color: ${(props) => props.theme.palette.warning.main};
    }
  }
  &.MuiAlert-outlinedError {
    border-color: ${(props) => props.theme.palette.error.main};
    .MuiAlert-icon {
      color: ${(props) => props.theme.palette.error.main};
    }
  }
  &.MuiAlert-outlinedSuccess {
    border-color: ${(props) => props.theme.palette.success.main};
    .MuiAlert-icon {
      color: ${(props) => props.theme.palette.success.main};
    }
  }
  &.MuiAlert-standardWarning {
    background-color: ${(props) => props.theme.palette.warning.main};
    color: ${(props) => props.theme.palette.warning.dark};
    .MuiAlert-icon {
      color: ${(props) => props.theme.palette.warning.dark};
    }
  }
  &.MuiAlert-standardError {
    background-color: ${(props) => props.theme.palette.error.main};
    color: ${(props) => props.theme.palette.error.dark};
    .MuiAlert-icon {
      color: ${(props) => props.theme.palette.error.dark};
    }
  }
  &.MuiAlert-standardInfo {
    background-color: ${(props) => props.theme.palette.info.main};
    color: ${(props) => props.theme.palette.info.dark};
    .MuiAlert-icon {
      color: ${(props) => props.theme.palette.info.dark};
    }
  }
  &.MuiAlert-standardSuccess {
    background-color: ${(props) => props.theme.palette.success.main};
    color: ${(props) => props.theme.palette.success.dark};
    .MuiAlert-icon {
      color: ${(props) => props.theme.palette.success.dark};
    }
  }
` as typeof Alert;
