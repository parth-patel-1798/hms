import React from "react";
import MainLayout from "@layouts/MainLayout";
import Dashboard from "@views/Dashboard";

const PrivateRoutes = {
  element: <MainLayout />,
  children: [
    {
      path: "/dashboard",
      element: <Dashboard />,
      loader: () => {
        return true;
      },
      errorElement: <div>Error</div>,
    },
    {
      path: "/employees",
      element: <div>Employees</div>,
      loader: () => {
        return true;
      },
      errorElement: <div>Error</div>,
    },
  ],
};
export default PrivateRoutes;
