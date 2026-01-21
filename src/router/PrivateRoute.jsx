import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  // Si hay usuario entra, si no, va a login
  return user ? children : <Navigate to="/login" replace />;
}