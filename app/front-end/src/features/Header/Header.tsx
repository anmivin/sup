import { useTranslation } from 'react-i18next';

import { Box, Switch } from '@mui/material';
import { useStore } from 'zustand';

import ProfileMenu from '@features/ProfileMenu';

import routes from '@constants/routes';

import { CommonStore } from '@stores/Common/Common.store';
import { ProfileStore } from '@stores/Profile/Profile.store';

import { MoonIcon, SunIcon } from '@assets/icons';

import { ButtonContainer, Divider, HeaderContainer, MainSection, StyledButton, StyledLink } from './Header.styled';

const Header = () => {
  const { t } = useTranslation();
  const { isDarkTheme, setIsDarkTheme } = ProfileStore();
  const { setIsSignModalOpen } = useStore(CommonStore);
  return (
    <HeaderContainer>
      <Box display="flex" flexDirection="row" justifyContent="flex-end" gap={2} alignItems="center">
        <Switch
          onChange={(e) => setIsDarkTheme(() => e.target.checked)}
          checkedIcon={<MoonIcon color="textDark" />}
          icon={<SunIcon color="textDark" />}
          checked={isDarkTheme()}
        />
      </Box>
      <MainSection>
        {routes.menuRoutes.map((route) => (
          <StyledButton key={route.key}>
            <ButtonContainer>
              <Divider />
              <StyledLink style={{ textDecoration: 'none' }} href={route.link}>
                {t(`data.pages.${route.key}`)}
              </StyledLink>
            </ButtonContainer>
          </StyledButton>
        ))}

        <ProfileMenu onOpenLoginForm={() => setIsSignModalOpen(true)} />
      </MainSection>
    </HeaderContainer>
  );
};

export default Header;
