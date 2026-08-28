import {
  Logo,
  ThemeButton,
  NavList,
  AuthLinks,
  UserProfile,
} from '@/components';
import { Header } from './DesktopNavigation.styled';

interface DesktopNavigationProps {
  name: string;
  isLoggedIn: boolean;
  onLogOutClick: () => void;
}
const DesktopNavigation = ({
  name,
  isLoggedIn,
  onLogOutClick,
}: DesktopNavigationProps) => {
  return (
    <Header>
      <Logo />
      <nav>
        <NavList isLoggedIn={isLoggedIn} />
      </nav>

      {!isLoggedIn ? (
        <AuthLinks />
      ) : (
        <UserProfile name={name} onClick={onLogOutClick} />
      )}

      <ThemeButton />
    </Header>
  );
};

export { DesktopNavigation };
