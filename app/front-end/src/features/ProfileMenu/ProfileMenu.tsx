import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, MenuList } from '@mui/material';

import { ButtonContainer, Divider, StyledButton, StyledPoper } from '@features/Header/Header.styled';

import routes from '@constants/routes';

import { LANGUAGE } from '@type/enums';

import { ProfileStore } from '@stores/Profile/Profile.store';

import Link from '@ui/Link';
import DefaultMenuItem from '@ui/Menu/MenuItem';
import Select from '@ui/Select';

import { UserIcon } from '@assets/icons';

import { ProfileMenuProps } from './ProfileMenu.types';

import { Can, CrudAbility } from '../../shared/ability/Ability';

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
          {routes.profileRoutes.map((route) => (
            <Can do={CrudAbility.READ} on={route.can}>
              <DefaultMenuItem key={route.link} onClick={() => setAnchorEl(null)}>
                <Button /* href={route.link} */>{t(`data.pages.${route.key}`)}</Button>
              </DefaultMenuItem>
            </Can>
          ))}

          <DefaultMenuItem onClick={() => (userId ? logout() : onOpenLoginForm())}>
            {userId ? t('data.pages.logout') : t('data.pages.login')}
          </DefaultMenuItem>

          <Select
            variant="standard"
            sx={{ '.MuiOutlinedInput-input': { padding: 1 } }}
            value={i18n.language}
            onChange={(e) => {
              i18n.changeLanguage(e.target.value as LANGUAGE);
            }}
          >
            {Object.entries(LANGUAGE).map(([key, value]) => (
              <DefaultMenuItem key={key} value={key}>
                {value}
              </DefaultMenuItem>
            ))}
          </Select>
        </MenuList>
      </StyledPoper>
    </StyledButton>
  );
};

export default ProfileMenu;
