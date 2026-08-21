import { createContext } from 'react';
import { ThemeContextType } from '@/types';

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

export { ThemeContext };
