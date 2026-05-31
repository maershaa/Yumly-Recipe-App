import { selectIsLoggedIn } from '@/app/redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Loader } from '@/components';
import { selectIsRefreshing } from '@/app/redux/auth/selectors';

const PrivateRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <Loader />;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" replace />;

  // replace нужен для того, чтобы не засорять историю переходов «закрытыми» экранами и спасти пользователя от бесконечных редиректов при нажатии кнопки «Назад»
};

export { PrivateRoute };
