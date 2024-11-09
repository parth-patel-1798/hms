import AuthLayout from '@layouts/AuthLayout';
import ForgotPassword from '@views/Authentication/ForgotPassword';
import Login from '@views/Authentication/Login';
import Registration from '@views/Authentication/Registration';

const PublicRoutes = {
    path: '/auth',
    element: <AuthLayout />,
    children: [
        {
            path: 'login',
            element: <Login />,
            loader: () => {
                return true;
            },
            errorElement: <div>Error</div>,
        },
        {
            path: 'registration',
            element: <Registration />,
            loader: () => {
                return true;
            },
            errorElement: <div>Error</div>,
        },
        {
            path: 'forgot-password',
            element: <ForgotPassword />,
            loader: () => {
                return true;
            },
            errorElement: <div>Error</div>,
        },
        {
            path: 'reset-password/:token',
            element: <div>Reset Password</div>,
            loader: () => {
                return true;
            },
            errorElement: <div>Error</div>,
        },
    ],
};

export default PublicRoutes;
