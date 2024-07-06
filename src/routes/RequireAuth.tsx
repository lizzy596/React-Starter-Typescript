import React, { ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import authService from '../services/auth.service'; // Assuming authService has a User type

interface RequireAuthProps {
  children: ReactNode;
  roles?: string[]; // Assuming roles are optional and of type string array
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children, roles }) => {
  let location = useLocation();
  const userValue = authService.userValue as User | null;
  if (!userValue)
    return <Navigate to="/login" state={{ from: location }} replace />;
  
  if (roles && !roles.includes(userValue.role))
    authService.logout();

  return <>{children}</>;
};

export default RequireAuth;
