import { NavLink } from 'react-router-dom';
import { NavListComponent } from './NavList.styled';
const guestLinks = [{ to: 'recipes', label: 'Recipes' }];

const userLinks = [
  { to: 'recipes', label: 'Recipes' },
  { to: 'my-recipes', label: 'My recipes' },
  { to: 'my-recipes/new', label: 'Create recipe' },
];

const NavList = ({ onClick, isLoggedIn }) => {
  const activeLinks = isLoggedIn ? userLinks : guestLinks;

  return (
    <NavListComponent>
      {activeLinks.map(({ to, label }) => (
        <li key={to}>
          <NavLink
            to={to}
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
