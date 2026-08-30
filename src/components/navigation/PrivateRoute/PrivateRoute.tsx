import { selectIsLoggedIn } from '@/app/redux/auth/selectors';
import { Navigate, Outlet } from 'react-router-dom';
import { Loader } from '@/components';
import { selectIsRefreshing } from '@/app/redux/auth/selectors';
import { useAppSelector } from '@/app/redux/hooks';

const PrivateRoute = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <Loader />;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" replace />;

  // replace нужен для того, чтобы не засорять историю переходов «закрытыми» экранами и спасти пользователя от бесконечных редиректов при нажатии кнопки «Назад»
};

export { PrivateRoute };
