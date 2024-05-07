import { useTranslation } from 'react-i18next';

import { Box, Link, Typography, styled } from '@mui/material';

import Plumbob from '../../../public/pngegg.png';

const ErrrorBox = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.infoDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const Error = () => {
  const { t } = useTranslation();

  return (
    <ErrrorBox>
      <img src={Plumbob} alt="Picture of the author" width="200" height="400" />
      <Typography variant="subtitle2" color="white">
        404
      </Typography>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Typography variant="subtitle2" color="white">
          {t('data.pages.error')}
        </Typography>
      </Link>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Typography variant="subtitle2" color="white">
          OK
        </Typography>
      </Link>
    </ErrrorBox>
  );
};

export default Error;
