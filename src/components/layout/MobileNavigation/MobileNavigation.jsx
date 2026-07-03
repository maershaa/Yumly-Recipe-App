import { useState } from 'react';

import {
  Logo,
  ThemeButton,
  NavList,
  AuthLinks,
  UserProfile,
} from '@/components';
import {
  ResponsiveNavigationWrapper,
  BurgerMenu,
  MobileMenu,
} from './MobileNavigation.styled';

import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

const MobileNavigation = ({ name, isLoggedIn, onLogOutClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setMenuOpen(true);
  };

  const handleCloseBurgerMenu = () => {
    setMenuOpen(false);
  };

  return (
    <ResponsiveNavigationWrapper>
      {!menuOpen ? (
        <BurgerMenu>
          <Logo />
          <button
            className="burgerBtn"
            onClick={handleBurgerMenuClick}
            aria-label="Open navigation"
          >
            <RxHamburgerMenu />
          </button>
        </BurgerMenu>
      ) : (
        <MobileMenu>
          <button
            className="closeBtn"
            onClick={handleCloseBurgerMenu}
            aria-label="Close navigation"
          >
            <IoMdClose />
          </button>

          <Logo />

          <section className="navigation">
            <NavList isLoggedIn={isLoggedIn} onClick={handleCloseBurgerMenu} />
          </section>

          <section className="themeSection">
            <ThemeButton />
          </section>

          <section className="userSection">
            {!isLoggedIn ? (
              <AuthLinks onClick={handleCloseBurgerMenu} />
            ) : (
              <UserProfile name={name} onClick={onLogOutClick} />
            )}
          </section>
        </MobileMenu>
      )}
    </ResponsiveNavigationWrapper>
  );
};

export { MobileNavigation };
