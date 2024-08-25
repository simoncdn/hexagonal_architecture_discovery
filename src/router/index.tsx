import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '@/components/layout';
import Notifications from '@/pages/Notifications';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        index: true,
        element: <Home />,
      },
      {
        path: 'notifications',
        index: true,
        element: <Notifications />,
      },
    ],
  },
]);

export type AppRouter = typeof router;
export default router;
