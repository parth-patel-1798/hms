import React from "react";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

export default function AppRoutes() {
  const router = createHashRouter([PrivateRoutes]);
  // const router = createBrowserRouter([PrivateRoutes]);

  return <RouterProvider router={router} />;
}
