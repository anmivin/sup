import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Box, Link, MenuList, Switch, useTheme } from '@mui/material';

import SignForm from '@entities/SignForm';

import DefaultMenuItem from '@components/DefaultMenuItem';
import BaseModal from '@components/DefaultModal';
import DefaultSelect from '@components/DefaultSelect';
import { UserIcon } from '@components/Icons';

import { Languages } from '@constants/enums';

import { ProfileStore } from '@stores/Profile/Profile.store';

import { ButtonContainer, Divider, HeaderContainer, MainSection, StyledButton, StyledPoper } from './Header.styled';

import { routes } from '../../shared/pathes/routes';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { userId, logout } = ProfileStore();
  const MenuRef = useRef<HTMLButtonElement | null>(null);
  const { isDarkTheme, setIsDarkTheme } = ProfileStore();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeaderContainer>
      <Box display="flex" flexDirection="row" justifyContent="flex-end" gap={2} alignItems="center">
        <Switch
          onChange={(e) => setIsDarkTheme(() => e.target.checked)}
          checkedIcon={<DarkModeIcon color="primary" />}
          icon={<WbSunnyIcon color="primary" />}
          checked={isDarkTheme()}
        />
      </Box>
      <MainSection>
        {routes
          .filter((route) => route.group === 'main')
          .map((route) => (
            <StyledButton key={route.key}>
              <ButtonContainer>
                <Divider />
                <Link style={{ textDecoration: 'none' }} href={route.link}>
                  {t(`data.pages.${route.key}`)}
                </Link>
              </ButtonContainer>
            </StyledButton>
          ))}

        <StyledButton
          ref={MenuRef}
          id="profile"
          onMouseEnter={(event) => {
            setAnchorEl(event.currentTarget);
            MenuRef.current = event.currentTarget;
          }}
          onMouseLeave={() => setAnchorEl(null)}
        >
          <ButtonContainer>
            <Divider />
            <UserIcon />
          </ButtonContainer>
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
            </MenuList>
          </StyledPoper>
        </StyledButton>

        <SignForm open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </MainSection>
    </HeaderContainer>
  );
};

export default Header;
