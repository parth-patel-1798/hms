import { CalendarRange, LayoutDashboard, Settings, Stethoscope, Users } from 'lucide-react';

const strokeWidth = 1.5;

const MenuItems = {
    admin: [
        {
            title: 'Dashboard',
            link: 'dashboard',
            icon: <LayoutDashboard strokeWidth={strokeWidth} />,
        },
        {
            title: 'Patients',
            link: 'patients',
            icon: <Users strokeWidth={strokeWidth} />,
        },
        {
            title: 'Doctors',
            link: 'doctors',
            icon: <Stethoscope strokeWidth={strokeWidth} />,
        },
        {
            title: 'Settings',
            icon: <Settings strokeWidth={strokeWidth} />,
            child: [
                {
                    title: 'Master Settings',
                    link: 'settings/master',
                },
                // {
                //     title: 'Role',
                //     link: 'settings/roles',
                // },
            ],
        },
    ],
    doctor: [
        {
            title: 'Dashboard',
            link: 'dashboard',
            icon: <LayoutDashboard strokeWidth={strokeWidth} />,
        },
        {
            title: 'Calender',
            link: 'calender',
            icon: <CalendarRange strokeWidth={strokeWidth} />,
        },
        {
            title: 'Patients',
            link: 'patients',
            icon: <Users strokeWidth={strokeWidth} />,
        },
    ],
    lab: [],
};

export default MenuItems;
