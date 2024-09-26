import Typography from '@components/Typography';
import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import MasterMenus from './MasterMenus';

const MasterSetting = () => {
    const location = useLocation();
    const isMasterRoute = location.pathname === '/settings/master';

    return (
        <div className="h-full flex flex-col gap-2">
            <div className="flex gap-2">
                <div>
                    <label className="flex items-center gap-2">
                        <span className="font-semibold">Master Settings</span>
                    </label>
                    <small className="text-xs font-normal text-gray-500">{`Dashboard > Settings > Master Settings`}</small>
                </div>
            </div>

            <section className="flex-1 flex gap-2 overflow-hidden">
                {/* Master Menu */}
                <div className={`${isMasterRoute ? 'block w-full' : 'hidden lg:block'} lg:w-[240px]`}>
                    <SimpleBar style={{ maxHeight: '100%' }}>
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
                                        <Icon className="text-2xl" />
                                        <Typography variant="body2" className="truncate">
                                            {menu.title}
                                        </Typography>
                                    </NavLink>
                                );
                            })}
                        </div>
                    </SimpleBar>
                </div>

                {/* Outlet for other pages */}
                <div className={`${isMasterRoute ? 'hidden md:block ' : ''} flex-1`}>
                    <div className="bg-white rounded-md p-2">
                        {/* <SimpleBar style={{ maxHeight: '100%' }}> */}
                        <Outlet />
                        {/* </SimpleBar> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MasterSetting;
