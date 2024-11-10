import { createBrowserRouter } from 'react-router-dom';
import Clock from '../components/Clock.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Clock />,
  }
]);

export default router;