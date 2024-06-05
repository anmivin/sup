import { MenuList, css, styled } from '@mui/material';

import Text from '@components/DefaultComponents/Typography/Text';

export const StyledMenuList = styled(MenuList)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: 0;
  max-width: 100%;
`;

export const FileListItem = styled('li')``;

export const FileName = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ theme, onClick }) =>
    onClick &&
    css`
      cursor: pointer;
      &:hover {
        color: ${theme.color.primary};
        text-decoration: underline;
      }
    `}
`;
