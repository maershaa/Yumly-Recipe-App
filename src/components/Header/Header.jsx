import { Logo } from '@/components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import { Header, UserMenu, UserAvatarWrapper } from './Header.styled';

const HeaderComponent = () => {
  return (
    <Header>
      <Logo />
      <nav>
        <ul>
          <li>
            <NavLink to={'recipes'}>Recipes</NavLink>{' '}
          </li>
          <li>
            <NavLink to={'my-recipes'}>My recipes</NavLink>{' '}
          </li>
          <li>
            <NavLink to={'new'}>Create recipe</NavLink>{' '}
          </li>
        </ul>
      </nav>

      <UserMenu>
        <button>
          <NavLink to={'auth/login'}>Login</NavLink>
        </button>
        <button>
          <NavLink to={'auth/register'}>Register</NavLink>
        </button>
      </UserMenu>

      <UserAvatarWrapper>
        <img src="" alt="" />
      </UserAvatarWrapper>
    </Header>
  );
};

export { HeaderComponent };
