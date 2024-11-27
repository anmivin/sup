import { useState } from 'react';

import { Box, IconButton } from '@mui/material';

import { HeartIcon } from '@assets/icons';

import { HelpBox, RawBox, Rect } from './HelpSection.styled';

//@TODO: функционал
const HelpSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <RawBox>
      {open ? (
        <Box display="flex" flexDirection="row">
          <HelpBox />
          <Rect>
            <IconButton onClick={() => setOpen(false)}>
              <HeartIcon />
            </IconButton>
          </Rect>
        </Box>
      ) : (
        <>
          <Rect>
            <IconButton onClick={() => setOpen(true)}>
              <HeartIcon />
            </IconButton>
          </Rect>
        </>
      )}
    </RawBox>
  );
};

export default HelpSection;
