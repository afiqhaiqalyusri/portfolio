import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // ✅ USE THIS
import { router } from "./app/routes"; // adjust path if needed
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);