import {
  Logo,
  ThemeButton,
  NavList,
  AuthLinks,
  UserProfile,
} from '@/components';
import { Header } from './DesktopNavigation.styled';

const DesktopNavigation = ({ name, isLoggedIn, onLogOutClick }) => {
  return (
    <Header>
      <Logo />
      <nav>
        <NavList isLoggedIn={isLoggedIn} />
      </nav>

      {!isLoggedIn ? (
        <AuthLinks />
      ) : (
        <UserProfile showFullName={false} name={name} onClick={onLogOutClick} />
      )}

      <ThemeButton />
    </Header>
  );
};

export { DesktopNavigation };
