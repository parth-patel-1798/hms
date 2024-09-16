import React from "react";
import MainLayout from "@layouts/MainLayout";
import Dashboard from "@views/Dashboard";
import Patient from "@views/Patient";
import AddPatient from "@views/Patient/AddPatient";
import EditPatient from "@views/Patient/EditPatient";

const PrivateRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "profile",
      element: <div>Profile</div>,
      loader: () => {
        return true;
      },
      errorElement: <div>Error</div>,
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
      path: "patients",
      element: <Patient />,
      loader: () => {
        return true;
      },
      errorElement: <div>Error</div>,
    },
    {
      path: "patients/create",
      element: <AddPatient />,
      loader: () => {
        return true;
      },
      errorElement: <div>Error</div>,
    },
    {
      path: "patients/edit/:id",
      element: <EditPatient />,
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
