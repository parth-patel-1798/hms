import React from 'react';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export default function AppRoutes() {
    // const LoginUser = useSelector((state) => state.auth.user);

    // let routes = {};
    // switch (LoginUser?.user_type) {
    //     case 'admin':
    //         routes = PrivateRoutes;
    //         break;
    //     case 'doctor':
    //         routes = DoctorRoutes;
    //         break;
    //     case 'patient':
    //         routes = PrivateRoutes;
    //         break;
    //     case 'lab':
    //         routes = LabRoutes;
    //         break;
    //     default:
    //         break;
    // }

    // const router = createHashRouter([PublicRoutes, routes]);
    const router = createHashRouter([PublicRoutes, PrivateRoutes]);

    return <RouterProvider router={router} />;
}
