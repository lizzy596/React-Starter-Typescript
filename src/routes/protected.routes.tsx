import { ComponentType } from 'react';
import DefaultLayout from '../layouts/Default.layout';
import ProtectedPage from '../pages/ProtectedPage';

interface Route {
  path: string;
  exact: boolean;
  layout: ComponentType<any>; 
  element: ComponentType<any>; 
  roles?: string[];
}

const protectedRoutes: Route[] = [
  {
    path: '/home',
    exact: true,
    layout: DefaultLayout,
    element: ProtectedPage,
  },
];

export default protectedRoutes;
