import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '@/context';
import { Logo } from '@/components/Logo/Logo';
import {
  Header,
  NavMenu,
  UserMenu,
  UserAvatarWrapper,
  ThemeButton,
} from './Header.styled';

const HeaderComponent = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('HeaderComponent must be used within ThemeProvider');

  const { theme, toggleTheme } = context;

  const navLinks = [
    { to: 'recipes', label: 'Recipes' },
    { to: 'my-recipes', label: 'My recipes' },
    { to: 'new', label: 'Create recipe' },
  ];

  return (
    <Header>
      <Logo />

      <NavMenu>
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </NavMenu>

      <UserMenu>
        <NavLink to="auth/login">Login</NavLink>
        <NavLink to="auth/register" className="accent">
          Register
        </NavLink>
      </UserMenu>

      <UserAvatarWrapper>
        <span>U</span>
      </UserAvatarWrapper>

      <ThemeButton onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </ThemeButton>
    </Header>
  );
};

export { HeaderComponent };
