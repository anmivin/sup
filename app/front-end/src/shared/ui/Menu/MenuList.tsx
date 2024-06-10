import MuiMenuList from '@mui/material/MenuList';
import { styled } from '@mui/material/styles';

export const MenuList = styled(MuiMenuList)`
  .MuiMenuItem-root.Mui-selected {
    background-color: ${({ theme }) => theme.color.primaryDark};
    &:hover {
      background-color: ${({ theme }) => theme.color.primaryMain};
    }
  }
`;

export default MenuList;
