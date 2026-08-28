import { NavLink } from 'react-router-dom';
import { AuthLinksList } from './AuthLinks.styled';

interface AuthLinksProps {
  onLinkClick?: () => void;
}

const AuthLinks = ({ onLinkClick }: AuthLinksProps) => {
  return (
    <AuthLinksList>
      <li>
        <NavLink
          to="auth/login"
          className={({ isActive }) => (isActive ? 'accent' : '')}
          onClick={onLinkClick}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="auth/register"
          className={({ isActive }) => (isActive ? 'accent' : '')}
          onClick={onLinkClick}
        >
          Register
        </NavLink>
      </li>
    </AuthLinksList>
  );
};

export { AuthLinks };
