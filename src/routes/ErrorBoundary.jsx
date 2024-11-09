import React from 'react';
import { useRouteError } from 'react-router-dom';
import PermissionDenied from '@views/errors/PermissionDenied';

const ErrorBoundary = ({ children }) => {
    const error = useRouteError();
    console.log('error :', error);
    if (error instanceof Error && error.message === 'Forbidden') {
        return <PermissionDenied />;
    }

    return children;
};

export default ErrorBoundary;
