import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />; // redirect to Home if not logged in
  }
  return children;
}

export default ProtectedRoute;
