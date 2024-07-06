import { Routes, Route } from 'react-router-dom';
import publicRoutes from './routes/public.routes';
import protectedRoutes from './routes/protected.routes';
import RequireAuth from './routes/RequireAuth';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <route.layout>
              <route.element />
            </route.layout>
          }
        />
      ))}
      {protectedRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <RequireAuth roles={route.roles}>
             <route.layout>
                <route.element />
              </route.layout>
            </RequireAuth>

          }
        />
      ))}
    </Routes>
  </QueryClientProvider>
  );
};

export default App;