import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Link, Switch } from '@mui/material';

import ProfileMenu from '@entities/ProfileMenu';
import SignForm from '@entities/SignForm';

import { MoonIcon, SunIcon } from '@components/Icons';

import routes from '@constants/routes';

import { ProfileStore } from '@stores/Profile/Profile.store';

import { ButtonContainer, Divider, HeaderContainer, MainSection, StyledButton } from './Header.styled';

const Header = () => {
  const { t } = useTranslation();
  const { isDarkTheme, setIsDarkTheme } = ProfileStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeaderContainer>
      <Box display="flex" flexDirection="row" justifyContent="flex-end" gap={2} alignItems="center">
        <Switch
          onChange={(e) => setIsDarkTheme(() => e.target.checked)}
          checkedIcon={<MoonIcon color="textPrimary" />}
          icon={<SunIcon color="textPrimary" />}
          checked={isDarkTheme()}
        />
      </Box>
      <MainSection>
        {routes.menuRoutes.map((route) => (
          <StyledButton key={route.key}>
            <ButtonContainer>
              <Divider />
              <Link style={{ textDecoration: 'none' }} href={route.link}>
                {t(`data.pages.${route.key}`)}
              </Link>
            </ButtonContainer>
          </StyledButton>
        ))}

        <ProfileMenu onOpenLoginForm={() => setIsModalOpen(true)} />

        <SignForm open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </MainSection>
    </HeaderContainer>
  );
};

export default Header;
