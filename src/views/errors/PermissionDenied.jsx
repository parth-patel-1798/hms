import React from 'react';
const PermissionDenied = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-2">
            <span className="text-center text-3xl font-extrabold text-red-700">We are sorry...</span>
            <span className="text-center text-red-700">The page you're trying to access has restricted access.</span>
        </div>
    );
};

export default PermissionDenied;
