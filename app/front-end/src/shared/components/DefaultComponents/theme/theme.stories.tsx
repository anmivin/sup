import { useContext } from 'react';

import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, Divider } from 'ui/components';

import { ColorModeContext } from './theme.provider';
import { Color } from './theme.types';

export default {
  title: 'Theme',
  parameters: {
    docs: {
      description: {
        component: 'https://www.figma.com/file/cXth3gmDPPhegP1QsF8GD6/Capital-Group?node-id=249%3A5383',
      },
    },
    componentSubtitle: 'Тема',
  },
  argTypes: {},
};

const themeColorsList: (Color | '-')[] = [
  'primary',
  'secondary',
  'error',
  'warning',
  'success',
  'info',
  'link',
  'linkVisited',
  'background',
  'background2',
  'switch',
  'monoA',
  'monoB',
  'white',
  'black',
  'gray',
  '-',

  'primary50',
  'primary100',
  'primary200',
  'primary300',
  'primary400',
  'primary500',
  'primary600',
  'primary700',
  'primary800',
  'primary900',
  '-',

  'secondary50',
  'secondary100',
  'secondary200',
  'secondary300',
  'secondary400',
  'secondary500',
  'secondary600',
  'secondary700',
  'secondary800',
  'secondary900',
  '-',

  'error50',
  'error100',
  'error200',
  'error300',
  'error400',
  'error500',
  'error600',
  'error700',
  'error800',
  'error900',
  '-',

  'warning50',
  'warning100',
  'warning200',
  'warning300',
  'warning400',
  'warning500',
  'warning600',
  'warning700',
  'warning800',
  'warning900',
  '-',

  'success50',
  'success100',
  'success200',
  'success300',
  'success400',
  'success500',
  'success600',
  'success700',
  'success800',
  'success900',
  '-',

  'info50',
  'info100',
  'info200',
  'info300',
  'info400',
  'info500',
  'info600',
  'info700',
  'info800',
  'info900',
  '-',

  'surface50',
  'surface100',
  'surface200',
  'surface300',
  'surface400',
  'surface500',
  'surface600',
  'surface700',
  'surface800',
  'surface900',
  'surfaceOn',
  '-',

  'grayscale50',
  'grayscale100',
  'grayscale200',
  'grayscale300',
  'grayscale400',
  'grayscale500',
  'grayscale600',
  'grayscale700',
  'grayscale800',
  'grayscale900',
  '-',

  'red',
  'brown',
  'orange',
  'yellow',
  'green',
  'marine',
  'sky',
  'blue',
  'violet',
  'purple',
  'pink',
  'teal',
  'gray50',
  'gray100',
  'gray200',
  'gray300',
  'gray400',
  'gray500',
  'gray600',
  'gray700',
  'gray800',
  'gray900',
];

const ThemeTemplate = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Container>
      <Box mb={2}>
        <Button onClick={() => colorMode.changeColorMode()}>
          Включить {theme.palette.mode === 'dark' ? 'светлую' : 'темную'} тему
        </Button>
      </Box>
      {themeColorsList.map((colorName: Color | '-') =>
        colorName === '-' ? (
          <Divider sx={{ my: 2 }} key="-" />
        ) : (
          <ListItem key={colorName}>
            <ListItemName>{colorName}</ListItemName>
            <ListItemColor colorName={colorName} />
            <ListItemHex>{theme.color[colorName]}</ListItemHex>
          </ListItem>
        )
      )}
    </Container>
  );
};

export const Colors = ThemeTemplate.bind({});

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background};
  padding: 8px 16px;
  border-radius: 4px;
  max-width: 500px;
`;

const ListItem = styled('div')`
  display: flex;
  padding: 8px;
  align-items: center;
`;
const ListItemName = styled('div')`
  width: 120px;
  flex-shrink: 0;
  padding-right: 16px;
  color: gray;
`;

const ListItemColor = styled('div')<{ colorName: Color }>`
  height: 32px;
  width: 150px;
  max-width: 50%;
  margin-bottom: 8px;
  border: 1px solid ${({ theme }) => theme.color.monoA100};
  background-color: ${({ theme, colorName }) => theme.color[colorName]};
`;

const ListItemHex = styled('div')`
  width: 150px;
  flex-shrink: 0;
  padding-left: 16px;
  color: #5b5b5b;
  font-weight: 300;
`;
