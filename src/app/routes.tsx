import { createHashRouter } from "react-router-dom"; 
import { Home } from "./pages/Home";
import { EopPage } from "./pages/EopPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/eop",
    element: <EopPage />,
  },
  {
    path: "*",
    element: <Home />, // ✅ fallback route
  },
]);