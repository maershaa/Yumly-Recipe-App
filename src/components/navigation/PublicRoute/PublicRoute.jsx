import { selectIsLoggedIn } from '@/app/redux/auth/selectors';
import { Navigate, Outlet } from 'react-router-dom';
import { Loader } from '@/components';
import { selectIsRefreshing } from '@/app/redux/auth/selectors';
import { useAppSelector } from '@/app/redux/hooks';

const PublicRoute = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <Loader />;
  }

  return isLoggedIn ? <Navigate to="/my-recipes" replace /> : <Outlet />;
};

export { PublicRoute };
