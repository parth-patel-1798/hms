import React from 'react';
import MasterMenus from './MasterMenus';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Typography from '@components/Typography';

const MasterSettings = () => {
    const location = useLocation();
    const isMasterRoute = location.pathname === '/settings/master';

    return (
        <div className="flex flex-col h-full gap-2">
            {/* Breadcrumbs */}
            <div className="inline-flex gap-2">
                <div>
                    <label className="flex items-center gap-2">
                        <span className="font-semibold">Master Settings</span>
                    </label>
                    <small className="text-xs font-normal text-gray-500">{`Dashboard > Settings > Master Settings`}</small>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex gap-2 w-full">
                <div className={`${isMasterRoute ? 'block w-full' : 'hidden lg:block'} lg:w-[240px]`}>
                    <div className="bg-white rounded-md px-2">
                        <div className="grid grid-cols-1 gap-2 p-2 bg-white rounded-md">
                            {MasterMenus.map((menu, i) => {
                                const Icon = menu.icon;
                                return (
                                    <NavLink
                                        key={i}
                                        to={menu.link}
                                        className={({ isActive }) =>
                                            `py-1 inline-flex items-center gap-2 ${isActive ? 'text-cyan-800 font-semibold' : 'hover:text-cyan-800 hover:font-normal'}`
                                        }
                                    >
                                        <Icon className="text-2xl" strokeWidth={1.5}/>
                                        <Typography variant="body2" className="truncate">
                                            {menu.title}
                                        </Typography>
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <main className={`flex-1  ${isMasterRoute ? 'hidden ' : 'flex flex-col'} `}>
                    <div className="bg-white rounded-md p-2">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MasterSettings;
