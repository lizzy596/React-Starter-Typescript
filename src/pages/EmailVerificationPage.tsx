import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import authService from '../services/auth.service';


const EmailVerificationPage: React.FC = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const param = new URLSearchParams(search);
  const token = param.get('token');


const checkToken = async (token: string) => {
  try {
    await authService.verifyEmail(token);
    navigate('/login')
  } catch (err) {
    navigate('/error');
  }
};



  useEffect(() => {
    
   // const queryParams = new URLSearchParams(location.search);

    if(!token) {
      navigate('/error')
    } else {
      checkToken(token!);
    }
     

  }, []);
  return (
    <div className="flex items-start justify-center min-h-screen bg-neutral-300 pt-20">
      <div>Congrats you have been verified!!</div>
    </div>
  );
};

export default EmailVerificationPage;
