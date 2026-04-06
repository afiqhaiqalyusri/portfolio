import { RouterProvider } from 'react-router-dom'; // ✅ FIX THIS
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}