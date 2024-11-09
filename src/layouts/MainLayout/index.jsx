import React, { useEffect } from 'react';
import { MenuProvider } from '@contexts/MenuContext';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const MainLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Get authData and determine if the user is authenticated
    const { isAuthenticated } = useSelector((state) => state.auth);

    // Redirect to login if the user is not authenticated
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth/login', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    // If not authenticated, return null to prevent rendering the layout
    if (!isAuthenticated) return null;

    return (
        <div className="relative h-dvh bg-slate-100 flex">
            <MenuProvider>
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col z-10 overflow-hidden">
                    {/* Header */}
                    <Header />

                    {/* Main Content Section with SimpleBar for scroll management */}
                    <main className="flex-1 flex flex-col bg-slate-100 overflow-auto">
                        <div className="flex-1 p-2">
                            <Outlet />
                        </div>
                    </main>
                </main>
            </MenuProvider>
        </div>
    );
};

export default MainLayout;
