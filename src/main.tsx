import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // ✅ USE THIS
import { router } from "./app/routes"; // adjust path if needed
// Update the path below to match your actual CSS file location
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
); 