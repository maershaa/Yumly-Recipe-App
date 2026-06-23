import { useContext } from 'react';
import { ThemeContext } from '@/context';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeBtn } from './ThemeButton.styled';
const ThemeButton = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('HeaderComponent must be used within ThemeProvider');
  const { theme, toggleTheme } = context;

  return (
    <ThemeBtn onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </ThemeBtn>
  );
};

export { ThemeButton };
