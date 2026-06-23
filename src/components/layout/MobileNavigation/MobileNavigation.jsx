import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { Logo, ThemeButton } from '@/components';
import {
  ResponsiveNavigationWrapper,
  BurgerMenu,
  UserMenu,
  MobileMenu,
  StyledTooltip,
} from './MobileNavigation.styled';
import { selectUser } from '@/app/redux/auth/selectors';
import { useSelector } from 'react-redux';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';

const MobileNavigation = ({ isLoggedIn, onLogOutClick, navLinks }) => {
  const { name } = useSelector(selectUser);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setMenuOpen(true);
  };

  const handleCloseBurgerMenu = () => {
    setMenuOpen(false);
  };
  return (
    <ResponsiveNavigationWrapper>
      {!menuOpen && (
        <BurgerMenu>
          <Logo />
          <button onClick={handleBurgerMenuClick} aria-label="Open navigation">
            <TiThMenu />
          </button>
        </BurgerMenu>
      )}

      {menuOpen && (
        <MobileMenu>
          <button
            className="closeBtn"
            onClick={handleCloseBurgerMenu}
            aria-label="Close navigation"
          >
            <IoMdClose />
          </button>

          <nav>
            <ul>
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={handleCloseBurgerMenu}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              {!isLoggedIn ? (
                <>
                  <li>
                    {' '}
                    <NavLink
                      to="auth/login"
                      className={({ isActive }) => (isActive ? 'accent' : '')}
                      onClick={handleCloseBurgerMenu}
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    {' '}
                    <NavLink
                      to="auth/register"
                      className={({ isActive }) => (isActive ? 'accent' : '')}
                      onClick={handleCloseBurgerMenu}
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <UserMenu>
                  <button onClick={onLogOutClick}>Logout</button>

                  <div>
                    <span className="userName">{name.slice(0, 1)}</span>
                    <StyledTooltip text={name} />
                  </div>
                </UserMenu>
              )}
            </ul>
          </nav>

          <ThemeButton />
        </MobileMenu>
      )}
    </ResponsiveNavigationWrapper>
  );
};

export { MobileNavigation };
