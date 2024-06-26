import { useAuth } from '../hooks/useAyth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/login' }) => {
  const { isLoggedIn } = useAuth();
  
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};