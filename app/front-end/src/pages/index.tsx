import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import {
  Alert,
  Autocomplete,
  Badge,
  Box,
  MenuItem,
  MenuList,
  Slider,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

import Loader from '@entities/Loader';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];
export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t, i18n } = useTranslation();

  return (
    <>
      <Loader />
      {/* <Box sx={{ height: 330, transform: "translateZ(0px)", flexGrow: 1 }}>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel='SpeedDial tooltip example'
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box> */}

      {/* <Snackbar open={true} autoHideDuration={6000} onClose={handleClose} >
        <Alert  onClose={handleClose}  severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>

      <Alert variant="filled" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Box>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
         getAriaValueText='' 
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
      </Box>
      <Badge color="secondary" badgeContent={100}>
        <CropOriginalIcon />
      </Badge> */}
      {/*   <Autocomplete
        multiple
        disableCloseOnSelect
        options={AlSkills}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label='Controllable' />}
      /> */}
    </>
  );
}
