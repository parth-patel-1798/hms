import { CalendarRange, FlaskConical, LayoutDashboard, Settings, SquareKanban, Stethoscope, Users } from 'lucide-react';

const strokeWidth = 1.5;

const MenuItems = [
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
        title: 'Appointment',
        link: 'appointments',
        icon: <SquareKanban strokeWidth={strokeWidth} />,
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
        title: 'Laboratories',
        link: 'laboratory',
        icon: <FlaskConical strokeWidth={strokeWidth} />,
    },
    {
        title: 'Settings',
        icon: <Settings strokeWidth={strokeWidth} />,
        child: [
            {
                title: 'Master Settings',
                link: 'settings/master',
            },
            {
                title: 'Role',
                link: 'settings/roles',
            },
            {
                title: 'Packages',
                link: 'settings/packages',
            },
        ],
    },
];

export default MenuItems;
