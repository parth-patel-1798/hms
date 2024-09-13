import React from "react";
import MainLayout from "@layouts/MainLayout";
import Dashboard from "@views/Dashboard";

const PrivateRoutes = {
  path: "/hms",
  element: <MainLayout />,
  children: [
    {
      path: "profile",
      element: <div>Profile</div>,
      loader: () => {
        return true;
      },
      // errorElement: <div>Error</div>,
    },
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
      path: "settings/general",
      element: <div>general</div>,
      loader: () => {
        return true;
      },
      errorElement: <div>Error</div>,
    },
    {
      path: "settings/system",
      element: <div>system</div>,
      loader: () => {
        return true;
      },
      errorElement: <div>Error</div>,
    },
  ],
};
export default PrivateRoutes;
