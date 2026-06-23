import { NavLink } from 'react-router-dom';
import { Logo, ThemeButton } from '@/components';
import {
  Header,
  NavMenu,
  UserMenu,
  UserAvatarWrapper,
  StyledTooltip,
} from './DesktopNavigation.styled';
import { selectUser } from '@/app/redux/auth/selectors';
import { useSelector } from 'react-redux';

const DesktopNavigation = ({ isLoggedIn, onLogOutClick, navLinks }) => {
  const { name } = useSelector(selectUser);

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
          <NavLink
            to="auth/login"
            className={({ isActive }) => (isActive ? 'accent' : '')}
          >
            Login
          </NavLink>
          <NavLink
            to="auth/register"
            className={({ isActive }) => (isActive ? 'accent' : '')}
          >
            Register
          </NavLink>
        </UserMenu>
      ) : (
        <UserMenu>
          <button to="/" onClick={onLogOutClick}>
            Logout
          </button>

          <UserAvatarWrapper>
            <span className="userName">{name.slice(0, 1)}</span>
            <StyledTooltip text={name} />
          </UserAvatarWrapper>
        </UserMenu>
      )}

      <ThemeButton />
    </Header>
  );
};

export { DesktopNavigation };
