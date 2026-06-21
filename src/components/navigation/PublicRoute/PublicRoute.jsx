import { selectIsLoggedIn } from '@/app/redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Loader } from '@/components';
import { selectIsRefreshing } from '@/app/redux/auth/selectors';

const PublicRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <Loader />;
  }

  return isLoggedIn ? <Navigate to="/my-recipes" replace /> : <Outlet />;
};

export { PublicRoute };
