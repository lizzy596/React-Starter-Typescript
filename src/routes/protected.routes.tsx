import DefaultLayout from '../layouts/Default.layout';
import ProtectedPage from '../pages/ProtectedPage';



const protectedRoutes = [
  {
    path: '/home',
    exact: true,
    layout: DefaultLayout,
    element: ProtectedPage,
  },
];

export default protectedRoutes;