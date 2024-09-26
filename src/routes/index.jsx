import React from 'react';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export default function AppRoutes() {
    // const router = createHashRouter([PublicRoutes, PrivateRoutes]);
    const router = createBrowserRouter([PublicRoutes, PrivateRoutes]);

    return <RouterProvider router={router} />;
}
