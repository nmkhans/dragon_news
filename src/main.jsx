import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/Auth/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
