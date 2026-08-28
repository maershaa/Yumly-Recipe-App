import { toast } from 'sonner';

import { useAppSelector, useAppDispatch } from '@/app/redux/hooks';
import { logOutUser } from '@/app/redux/auth/operations';
import { selectIsLoggedIn, selectUser } from '@/app/redux/auth/selectors';
import { DesktopNavigation, MobileNavigation } from '@/components';
import { getErrorMessage } from '@/features/recipes/utils';

const HeaderComponent = () => {
  const { name } = useAppSelector(selectUser);

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const dispatch = useAppDispatch();

  const onLogOutClick = async () => {
    try {
      await dispatch(logOutUser()).unwrap();
      toast.success('You are successfully logged out');
    } catch (error) {
      toast.error('Failed to log out');
      console.error(getErrorMessage(error));
    }
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
