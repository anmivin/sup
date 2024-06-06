import { useState } from 'react';

import { Box, IconButton } from '@mui/material';

import { Divider, HelpBox, RawBox, Rect } from './HelpSection.styled';

import { HeartIcon } from '../../shared/ui/Icons';

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
