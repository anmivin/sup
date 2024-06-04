import { styled } from '@mui/material/styles';

import { ChipListProps } from './ChipList.types';

export const ChipList = styled('ul')<ChipListProps>({
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  paddingRight: 32,
  alignContent: 'start',
  overflow: 'hidden',
});

export const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(1),
  lineHeight: 0,
  '&.hiddenCount': {
    width: 0,
    margin: theme.spacing(1, 0),
    '.MuiChip-root': {
      maxWidth: 'none',
      margin: theme.spacing(0, 1),
    },
  },
}));
