import { Navigate } from 'react-router-dom';
import DefaultLayout from '../layouts/Default.layout';
import StartPage from '../pages/StartPage';
import LoginPage from '../pages/LoginPage';

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
 
];

export default publicRoutes;