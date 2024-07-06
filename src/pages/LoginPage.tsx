import React from 'react';
import AuthForm from '../features/AuthForm';
import { useLocation } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as { status: string } | undefined;
  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-50 pt-20">
      <AuthForm status={state} />
    </div>
  );
}

export default LoginPage;
