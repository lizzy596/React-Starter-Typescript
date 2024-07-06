// src/components/NavBar.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../services/auth.service';
import authService from '../services/auth.service';
import Button from './Button';

interface NavBarProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  height?: string;
  width?: string;
}

const NavBar: React.FC<NavBarProps> = ({
  title,
  backgroundColor = 'bg-primary', // Default background color
  textColor = 'text-white',        // Default text color
  height = 'h-24',                 // Default height
  width = 'w-full',                // Default width
}) => {
  const navigate = useNavigate();
  const user = useUserAuth();
  console.log('user', user);


  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <nav className={`flex items-center justify-between ${backgroundColor} ${textColor} ${height} ${width} py-4 px-10`}>
      <div className="text-2xl font-bold">{title}</div>
      <div>
        {user ? (
          <Button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Logout
          </Button>
        ) : (
          <div className="space-x-4">
            <Button onClick={() => navigate('/login')} className="bg-gray-600 hover:bg-gray-950 text-white py-2 px-4 rounded">
              LOGIN
            </Button>
            <Button onClick={() => navigate('/login', {state: {status: 'register'}})} className="bg-blue-600 hover:bg-blue-950 text-white py-2 px-4 rounded">
              REGISTER
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
