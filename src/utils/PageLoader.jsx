import React from 'react';
import { TbLoader } from 'react-icons/tb';

const PageLoader = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-2">
            <TbLoader className="animate-spin-slow text-center text-2xl" />
            <span className="font-medium">Loading...</span>
        </div>
    );
};

export default PageLoader;
