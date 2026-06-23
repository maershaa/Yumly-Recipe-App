import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '@/app/redux/auth/operations';
import { selectIsLoggedIn, selectUser } from '@/app/redux/auth/selectors';
import { DesktopNavigation, MobileNavigation } from '@/components';
const HeaderComponent = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const navLinks = [
    { to: 'recipes', label: 'Recipes' },
    { to: 'my-recipes', label: 'My recipes' },
    // { to: 'my-recipes/new', label: 'Create recipe' },
  ];

  const onLogOutClick = () => {
    dispatch(logOutUser());
  };

  return (
    <>
      <DesktopNavigation
        isLoggedIn={isLoggedIn}
        onLogOutClick={onLogOutClick}
        navLinks={navLinks}
      />
      <MobileNavigation
        isLoggedIn={isLoggedIn}
        onLogOutClick={onLogOutClick}
        navLinks={navLinks}
      />
    </>
  );
};

export { HeaderComponent };
