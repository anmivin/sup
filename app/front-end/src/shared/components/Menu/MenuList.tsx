import MuiMenuList from '@mui/material/MenuList';
import { styled } from '@mui/material/styles';

export const MenuList = styled(MuiMenuList)`
  .MuiMenuItem-root.Mui-selected {
    background-color: ${({ theme }) => theme.color.secondaryA100};
    &:hover {
      background-color: ${({ theme }) => theme.color.secondaryA150};
    }
  }
`;

export default MenuList;
