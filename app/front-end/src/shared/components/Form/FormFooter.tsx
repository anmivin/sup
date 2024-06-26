import { Box, Typography } from '@mui/material';

import DefaultButton from '@components/DefaultButton';

export interface DefaultFormFooterProps {
  onClose?: () => void;
  showRequiredHint?: boolean;
  disableSubmit?: boolean;
  disableCancel?: boolean;
  customCancelText?: string;
  customSubmitText?: string;
  onSubmit?: () => void;
  buttonEnd?: boolean;
}

const RequiredHint = () => (
  <Typography variant="body2">
    <Typography color="error" component="span" mr={0.5}>
      *
    </Typography>
    обязательное поле
  </Typography>
);

// @TODO: применить этот компонент для всех форм
const FormFooter = ({
  onClose,
  showRequiredHint = false,
  disableSubmit = false,
  disableCancel = false,
  customCancelText,
  customSubmitText,
  onSubmit,
  buttonEnd,
}: DefaultFormFooterProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={2} justifyContent="flex-start" mt={2}>
      {showRequiredHint && <RequiredHint />}
      <Box display="flex" gap={2} width="100%" justifyContent={buttonEnd ? 'flex-end' : undefined}>
        <DefaultButton
          type="submit"
          disabled={disableSubmit}
          disableElevation
          onClick={onSubmit}
          decor="underscored"
          className="little"
        >
          {customSubmitText || 'Сохранить'}
        </DefaultButton>
        <DefaultButton
          onClick={onClose}
          disabled={disableCancel}
          decor="underscored"
          className="little"
          sx={{
            order: buttonEnd ? -1 : 0,
          }}
        >
          {customCancelText || 'Отменить'}
        </DefaultButton>
      </Box>
    </Box>
  );
};

export default FormFooter;
