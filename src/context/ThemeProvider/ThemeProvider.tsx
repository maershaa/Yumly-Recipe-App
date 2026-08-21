import { useState, useEffect, useCallback, JSX } from 'react';

import { ThemeContext } from '../ThemeContext/ThemeContext';
import { ThemeMode } from '@/types';

interface ThemeProviderProps {
  children: JSX.Element;
}

const getInitialTheme = (): ThemeMode => {
  const stored = localStorage.getItem('theme');

  if (stored === 'light' || stored === 'dark') {
    return stored; //проверяет, что в localStorage реально лежит 'light' или 'dark', а не мусор
  } else {
    return 'dark'; // fallback, если в localStorage мусор или ничего нет
  }
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
