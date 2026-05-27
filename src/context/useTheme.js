import { useContext } from 'react';
import { ThemeContext } from './ThemeContext/ThemeContext';

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
};

export { useTheme };
