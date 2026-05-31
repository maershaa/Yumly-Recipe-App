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
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '@/app/redux/auth/operations';
import { selectIsLoggedIn, selectUser } from '@/app/redux/auth/selectors';

const HeaderComponent = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('HeaderComponent must be used within ThemeProvider');

  const { theme, toggleTheme } = context;
  const dispatch = useDispatch();

  const navLinks = [
    { to: 'recipes', label: 'Recipes' },
    { to: 'my-recipes', label: 'My recipes' },
    { to: 'my-recipes/new', label: 'Create recipe' },
  ];

  const onLogOutClick = () => {
    dispatch(logOutUser());
  };

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

      {!isLoggedIn ? (
        <UserMenu>
          <NavLink to="auth/login">Login</NavLink>
          <NavLink
            to="auth/register"
            // className="accent"
          >
            Register
          </NavLink>
        </UserMenu>
      ) : (
        <UserMenu>
          <NavLink to="/" onClick={onLogOutClick}>
            Logout
          </NavLink>

          <UserAvatarWrapper>
            <span>{name.slice(0, 1)}</span>
          </UserAvatarWrapper>
        </UserMenu>
      )}

      <ThemeButton onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </ThemeButton>
    </Header>
  );
};

export { HeaderComponent };
