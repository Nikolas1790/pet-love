import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAyth';

export const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const { isLoggedIn, isRefreshing, token } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return !token ? <Navigate to='/login'/> :
          (shouldRedirect ? <Navigate to={redirectTo} /> : Component);
};
