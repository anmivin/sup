import { StyledMenuItem } from './DefaultMenuItem.styled';

import { DefaultMenuItemProps } from './DefaultMenuItem.types';

const DefaultMenuItem = ({ ...props }: DefaultMenuItemProps) => {
  return <StyledMenuItem {...props} />;
};

export default DefaultMenuItem;
