import { FC, ReactNode, createContext, useEffect, useMemo, useState } from 'react';

import { GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeKey } from 'ui/theme/theme.constants';
import { Theme } from 'ui/theme/theme.types';

import { globalStyles } from './globalStyles';
import { theme } from './theme';
import { PaletteMode } from './theme.types';

interface ThemeColorModeProviderProps {
  children: ReactNode;
  currentThemeName?: ThemeKey;
}

export const ColorModeContext = createContext({
  changeColorMode: (_?: PaletteMode) => {},
});

const ThemeColorModeProvider: FC<ThemeColorModeProviderProps> = ({ children, currentThemeName }) => {
  const [mode, setMode] = useState<PaletteMode>(currentThemeName || 'light');
  const colorMode = useMemo(
    () => ({
      changeColorMode: (mode?: PaletteMode) => {
        if (mode) {
          setMode(mode);
        } else {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        }
      },
    }),
    []
  );
  useEffect(() => {
    setMode(currentThemeName || 'light');
  }, [currentThemeName]);

  const currentTheme: Theme = useMemo(() => theme[mode], [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
      <GlobalStyles styles={globalStyles(currentTheme)} />
    </ColorModeContext.Provider>
  );
};

export default ThemeColorModeProvider;
