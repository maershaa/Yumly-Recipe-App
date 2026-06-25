import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '@/app/redux/auth/operations';
import { selectIsLoggedIn, selectUser } from '@/app/redux/auth/selectors';
import { DesktopNavigation, MobileNavigation } from '@/components';

const HeaderComponent = () => {
  const { name } = useSelector(selectUser);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const onLogOutClick = () => {
    dispatch(logOutUser());
  };

  return (
    <header>
      <DesktopNavigation
        name={name}
        isLoggedIn={isLoggedIn}
        onLogOutClick={onLogOutClick}
      />
      <MobileNavigation
        name={name}
        isLoggedIn={isLoggedIn}
        onLogOutClick={onLogOutClick}
      />
    </header>
  );
};

export { HeaderComponent };
