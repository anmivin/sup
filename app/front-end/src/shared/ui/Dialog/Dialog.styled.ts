import { Dialog, DialogContent, styled } from '@mui/material';

export const StyledMuiDialog = styled(Dialog)`
  .MuiDialog-paper {
    position: relative;
    box-shadow: ${({ theme }) => theme.shadows[1]};
    border-radius: ${({ theme }) => theme.radius.lg};

    &.MuiDialog-paperWidthMd {
      max-width: 720px;
    }
  }
  .MuiDialog-paper.MuiDialog-paperFullWidth {
    width: calc(100vw - 100px);
    margin: ${({ theme }) => theme.spacing(8, 14)};
  }
  //.MuiDialog-paperWidthSm //TODO: размеры окон сейчас по-умолчанию из MUI
  .MuiBackdrop-root {
    backdrop-filter: blur(3px);
  }
`;

export const StyledMuiDialogContent = styled(DialogContent)`
  padding: ${({ theme }) => theme.spacing(4, 6)};
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease-out;

  .MuiDialogTitle-root + & {
    // добавил padding-top сюда, так как у DialogContent overflow-y: auto и может обрезаться содержимое, например лейблы у полей
    padding-top: ${({ theme }) => theme.spacing(2)};
  }
`;
