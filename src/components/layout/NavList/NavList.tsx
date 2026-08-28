import { NavLink } from 'react-router-dom';
import { NavListComponent } from './NavList.styled';

type NavLinkItem = { to: string; label: string; end?: boolean };

const guestLinks: NavLinkItem[] = [{ to: 'recipes', label: 'Recipes' }];

const userLinks: NavLinkItem[] = [
  { to: 'recipes', label: 'Recipes' },
  { to: 'my-recipes', label: 'My recipes', end: true },
  { to: 'my-recipes/favorites', label: 'Favorites' },
  { to: 'my-recipes/new', label: 'Create recipe' },
];

interface NavListProps {
  onClick?: () => void;
  isLoggedIn: boolean;
}

const NavList = ({ onClick, isLoggedIn }: NavListProps) => {
  const activeLinks: NavLinkItem[] = isLoggedIn ? userLinks : guestLinks;

  return (
    <NavListComponent>
      {activeLinks.map(({ to, label, end }) => (
        <li key={to}>
          <NavLink
            to={to}
            end={end}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={onClick}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </NavListComponent>
  );
};

export { NavList };
