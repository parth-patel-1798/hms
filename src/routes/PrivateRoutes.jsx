import React from "react";
import MainLayout from "@layouts/MainLayout";
import Dashboard from "@views/Dashboard";

const PrivateRoutes = {
  path: "/hms",
  element: <MainLayout />,
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
      loader: () => {
        return true;
      },
      // errorElement: <div>Error</div>,
    },
    {
      path: "employees",
      element: <div>Employees</div>,
      loader: () => {
        return true;
      },
      errorElement: <div>Error</div>,
    },
    {
      path: "organization/location",
      element: <div>location</div>,
      loader: () => {
        return true;
      },
      errorElement: <div>Error</div>,
    },
    {
      path: "organization/clients",
      element: <div>clients</div>,
      loader: () => {
        return true;
      },
      errorElement: <div>Error</div>,
    },
    {
      path: "organization/departments/location1",
      element: <div>department</div>,
      loader: () => {
        return true;
      },
      errorElement: <div>Error</div>,
    },
  ],
};
export default PrivateRoutes;
