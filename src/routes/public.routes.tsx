import { Navigate } from 'react-router-dom';
import DefaultLayout from '../layouts/Default.layout';
import StartPage from '../pages/StartPage';
import LoginPage from '../pages/LoginPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ErrorPage from '../pages/ErrorPage';
import EmailVerificationPage from '../pages/EmailVerificationPage';

import config from "../../config.json"

const publicRoutes = [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    element: () => <Navigate to={config.homeUrl} />,
  },
  {
    path: '/login',
    exact: true,
    layout: DefaultLayout,
    element: LoginPage,
  },
  {
    path: '/start',
    exact: true,
    layout: DefaultLayout,
    element: StartPage,
  },
  {
    path: '/forgot-password',
    exact: true,
    layout: DefaultLayout,
    element: ForgotPasswordPage,
  },
  {
    path: '/reset-password',
    exact: true,
    layout: DefaultLayout,
    element: ResetPasswordPage,
  },
  {
    path: '/start',
    exact: true,
    layout: DefaultLayout,
    element: StartPage,
  },
  {
    path: '/error',
    exact: true,
    layout: DefaultLayout,
    element: ErrorPage,
  },
  {
    path: '/verify-email',
    exact: true,
    layout: DefaultLayout,
    element: EmailVerificationPage,
  },
 
];

export default publicRoutes;