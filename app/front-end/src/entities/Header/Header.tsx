import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Link, Switch } from '@mui/material';

import ProfileMenu from '@entities/ProfileMenu';
import SignForm from '@entities/SignForm';

import routes from '@constants/routes';

import { ProfileStore } from '@stores/Profile/Profile.store';

import { ButtonContainer, Divider, HeaderContainer, MainSection, StyledButton, StyledLink } from './Header.styled';

import { MoonIcon, SunIcon } from '../../shared/ui/Icons';

const Header = () => {
  const { t } = useTranslation();
  const { isDarkTheme, setIsDarkTheme } = ProfileStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

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

        <ProfileMenu onOpenLoginForm={() => setIsModalOpen(true)} />

        <SignForm open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </MainSection>
    </HeaderContainer>
  );
};

export default Header;
