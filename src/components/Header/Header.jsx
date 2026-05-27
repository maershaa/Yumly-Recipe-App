import { Logo } from '@/components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import { Header, UserMenu, UserAvatarWrapper } from './Header.styled';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '@/context';
import { useContext } from 'react';

const HeaderComponent = () => {
  const context = useContext(ThemeContext); //Достаем данные из Context (theme, toggleTheme)
  // ❗ ручная защита от неправильного использования Context. если ты забыл обернуть приложение в <ThemeProvider>, то useContext(ThemeContext) вернёт null
  if (!context) {
    throw new Error('ThemeSwitcher must be used within ThemeProvider');
  }
  const { theme, toggleTheme } = context;

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

      <button onClick={toggleTheme}>
        {theme === 'dark' ? (
          <FaSun className="light" />
        ) : (
          <FaMoon className="dark" />
        )}
      </button>
    </Header>
  );
};

export { HeaderComponent };
