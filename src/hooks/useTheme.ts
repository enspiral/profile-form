import React, { useContext } from 'react';
import { theme } from '../themes/default';

const Theme = React.createContext(theme);

export const ThemeProvider = Theme.Provider;

export const useTheme = () => useContext(Theme);