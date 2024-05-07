import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Box, Link, MenuList, Switch, useTheme } from '@mui/material';

import DefaultButton from '@components/DefaultButton';
import DefaultMenuItem from '@components/DefaultMenuItem';
import DefaultSelect from '@components/DefaultSelect';

/* import BaseModal from '@components/DefaultModal';
import LoginForm from '@components/LoginForm'; */
import { Languages } from '@constants/enums';

import { ProfileStore } from '@stores/Profile/Profile.store';

import { HeaderContainer, StyledPoper } from './Header.styled';

import { routes } from '../../shared/pathes/routes';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { userId, logout, isDarkTheme, changeTheme } = ProfileStore();

  const MenuRef = useRef<HTMLDivElement | null>(null);

  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeaderContainer>
      <Box display="flex" flexDirection="row" justifyContent="flex-end" gap={2} alignItems="center">
        <Switch
          onChange={(e) => changeTheme(e.target.checked)}
          checkedIcon={<DarkModeIcon color="primary" />}
          icon={<WbSunnyIcon color="primary" />}
          checked={isDarkTheme}
        />

        <DefaultSelect
          variant="standard"
          sx={{ '.MuiOutlinedInput-input': { padding: 1 } }}
          value={i18n.language}
          onChange={(e) => {
            i18n.changeLanguage(e.target.value as Languages);
          }}
        >
          {Object.entries(Languages).map(([key, value]) => (
            <DefaultMenuItem key={key} value={key}>
              {value}
            </DefaultMenuItem>
          ))}
        </DefaultSelect>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="flex-end" gap={1}>
        <Box display="flex" gap={1}>
          {routes
            .filter((route) => route.group === 'main')
            .map((route) => (
              <Box key={route.key}>
                <DefaultButton decor="skewed">
                  <Link style={{ textDecoration: 'none', color: theme.color.textSecondary }} href={route.link}>
                    {t(`data.pages.${route.key}`)}
                  </Link>
                </DefaultButton>
              </Box>
            ))}
        </Box>
        <Box
          display="flex"
          ref={MenuRef}
          id="database"
          onMouseEnter={(event) => {
            setAnchorEl(event.currentTarget);
            MenuRef.current = event.currentTarget;
          }}
          onMouseLeave={() => setAnchorEl(null)}
        >
          <DefaultButton decor="skewed" endIcon={<KeyboardDoubleArrowDownIcon />}>
            {t('data.pages.challenges')}
          </DefaultButton>
          <StyledPoper open={anchorEl?.id === 'database'} anchorEl={MenuRef.current} disablePortal>
            <MenuList>
              {routes
                .filter((rout) => rout.group === 'challenges')
                .map((route) => (
                  <DefaultMenuItem key={route.link} onClick={() => setAnchorEl(null)}>
                    <Link style={{ textDecoration: 'none', color: theme.color.textPrimary }} href={route.link}>
                      {t(`data.pages.${route.key}`)}
                    </Link>
                  </DefaultMenuItem>
                ))}
            </MenuList>
          </StyledPoper>
        </Box>
        <Box
          display="flex"
          ref={MenuRef}
          id="profile"
          onMouseEnter={(event) => {
            setAnchorEl(event.currentTarget);
            MenuRef.current = event.currentTarget;
          }}
          onMouseLeave={() => setAnchorEl(null)}
        >
          <DefaultButton decor="skewed" endIcon={<KeyboardDoubleArrowDownIcon fontSize="large" />}>
            {t('data.pages.profile')}
          </DefaultButton>
          <StyledPoper open={anchorEl?.id === 'profile'} anchorEl={MenuRef.current} disablePortal>
            <MenuList>
              {routes
                .filter((rout) => rout.group === 'profile' && rout.visible /* && user */)
                .map((route) => (
                  <DefaultMenuItem key={route.link} onClick={() => setAnchorEl(null)}>
                    <Link href={route.link} style={{ textDecoration: 'none', color: theme.color.textPrimary }}>
                      {t(`data.pages.${route.key}`)}
                    </Link>
                  </DefaultMenuItem>
                ))}

              <DefaultMenuItem onClick={() => (userId ? logout : setIsModalOpen(true))}>
                {userId ? t('data.pages.logout') : t('data.pages.login')}
              </DefaultMenuItem>
            </MenuList>
          </StyledPoper>
        </Box>
        {/*        <BaseModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <LoginForm />
        </BaseModal> */}
      </Box>
    </HeaderContainer>
  );
};

export default Header;
