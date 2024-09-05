import React from "react";
import MainLayout from "@layouts/MainLayout";

const PrivateRoutes = {
  element: <MainLayout />,
  children: [
    {
      path: "/dashboard",
      element: <div>Dashboard</div>,
      loader: () => {
        return true;
      },
      errorElement: <div>Error</div>,
    },
  ],
};
export default PrivateRoutes;
