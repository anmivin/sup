import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { MenuList } from '@mui/material';

import { Languages } from '@constants/enums';
import routes from '@constants/routes';

import { ProfileStore } from '@stores/Profile/Profile.store';

import DefaultMenuItem from '@ui/DefaultMenuItem';
import DefaultSelect from '@ui/DefaultSelect';
import Link from '@ui/Link';

import { UserIcon } from '@assets/icons';

import { ProfileMenuProps } from './ProfileMenu.types';

import { ButtonContainer, Divider, StyledButton, StyledPoper } from '../Header/Header.styled';

const ProfileMenu = ({ onOpenLoginForm }: ProfileMenuProps) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const MenuRef = useRef<HTMLButtonElement | null>(null);

  const { userId, logout } = ProfileStore();
  return (
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
        <UserIcon color="textDark" />
      </ButtonContainer>
      <StyledPoper open={anchorEl?.id === 'profile'} anchorEl={MenuRef.current} disablePortal>
        <MenuList>
          {routes.profileRoutes
            .filter((rout) => rout.visible /* && user */)
            .map((route) => (
              <DefaultMenuItem key={route.link} onClick={() => setAnchorEl(null)}>
                <Link href={route.link}>{t(`data.pages.${route.key}`)}</Link>
              </DefaultMenuItem>
            ))}

          <DefaultMenuItem onClick={() => (userId ? logout : onOpenLoginForm)}>
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
  );
};

export default ProfileMenu;
