import React from 'react';
import ResetPasswordForm from '../features/ResetPasswordForm';
import { useNavigate, useLocation } from 'react-router-dom';


const ResetPasswordPage: React.FC = () => {
  // const navigate = useNavigate();
  // const { search } = useLocation();
  // const param = new URLSearchParams(search);
  // const token = param.get('token');
  return (
    <div className="flex items-start justify-center min-h-screen bg-neutral-300 pt-20">
      <ResetPasswordForm  />
    </div>
  );
}

export default ResetPasswordPage;