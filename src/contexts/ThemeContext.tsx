import { createContext, ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

import { usePersistedState } from '../hooks/usePersistedState';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type ThemeContextType = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export function ThemeContextProvider(props: ThemeContextProviderProps) {
  const [theme, setTheme] = usePersistedState('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
