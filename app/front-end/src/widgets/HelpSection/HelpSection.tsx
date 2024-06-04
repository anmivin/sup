import { useState } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, IconButton, Typography, styled } from '@mui/material';

const HelpBox = styled(Box)`
  background-color: ${({ theme }) => theme.color.primaryMain};
  color: ${({ theme }) => theme.color.textSecondary};
  height: 30px;
  width: 200px;
  transform: skewX(-28deg);
  position: relative;
  right: -8px;
`;

const Divider = styled(Box)`
  background-color: black;
  color: ${({ theme }) => theme.color.textSecondary};
  height: 30px;
  width: 200px;
  transform: skewX(-28deg);
  position: relative;
  right: -8px;
`;

const RawBox = styled(Box)`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const Rect = styled(Box)`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${({ theme }) => theme.color.errorMain};
  z-index: 3;
`;

const HelpSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <RawBox>
      {open ? (
        <Box display="flex" flexDirection="row">
          <HelpBox />
          <Rect>
            <IconButton onClick={() => setOpen(false)}>
              <FavoriteBorderIcon color="primary" fontSize="small" />
            </IconButton>
          </Rect>
        </Box>
      ) : (
        <>
          <Rect>
            <IconButton onClick={() => setOpen(true)}>
              <FavoriteBorderIcon color="primary" fontSize="small" />
            </IconButton>
          </Rect>
        </>
      )}
    </RawBox>
  );
};

export default HelpSection;
