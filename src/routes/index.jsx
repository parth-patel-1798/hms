import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export default function AppRoutes() {
    const router = createBrowserRouter([PublicRoutes, PrivateRoutes]);
    return <RouterProvider router={router} />;
}
