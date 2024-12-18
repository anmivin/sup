import { Box } from '@mui/material';

import CropImage from '@entities/CropImage/CropImage';

import DefaultModal from '@ui/Modal';

import { EditImageModalProps } from './EditImageModal.types';

const EditImageModal = ({ setImg, onClose, open, image }: EditImageModalProps) => {
  if (!image) return;
  return (
    <DefaultModal header="Edit image" open={open} onClose={onClose}>
      <>
        <Box display="flex" flexDirection="column" gap={2} width="50%" justifyContent="center">
          <CropImage url={URL.createObjectURL(image)} onCrop={setImg} />
        </Box>
      </>
    </DefaultModal>
  );
};

export default EditImageModal;
