import React, { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import CompanyLogo from '@assets/images/Company.png';
import { useSelector } from 'react-redux';

const AuthLayout = () => {
    const location = useLocation();
    const authData = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (authData.isAuthenticated) {
            navigate('/dashboard', { replace: true });
        }
    }, [location, authData]);

    return (
        <div className="h-dvh bg-slate-100 flex items-center justify-center p-3">
            <div className=" bg-white p-5 w-96 rounded-lg">
                <NavLink to={'/dashboard'} className={`sidebar-title justify-center px-2 pt-1 pb-5`}>
                    <img src={CompanyLogo} className="h-14" alt="Company Logo" />
                </NavLink>

                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
