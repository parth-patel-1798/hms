import React from "react";
import MainLayout from "@layouts/MainLayout";
import Dashboard from "@views/Dashboard";

const PrivateRoutes = {
  path: "/",
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
      element: <div>Location</div>,
      loader: () => {
        return true;
      },
      errorElement: <div>Error</div>,
    },
    {
      path: "organization/clients",
      element: <div>Clients</div>,
      loader: () => {
        return true;
      },
      errorElement: <div>Error</div>,
    },
    {
      path: "organization/departments/location1",
      element: <div>Department</div>,
      loader: () => {
        return true;
      },
      errorElement: <div>Error</div>,
    },
  ],
};

export default PrivateRoutes;
