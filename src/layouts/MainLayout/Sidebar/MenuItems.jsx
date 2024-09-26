import { LayoutDashboard, Settings, Stethoscope, Users } from 'lucide-react';

const MenuItems = [
    {
        title: 'Dashboard',
        link: 'dashboard',
        icon: <LayoutDashboard strokeWidth={1.5} />,
    },
    {
        title: 'Patients',
        link: 'patients',
        icon: <Users strokeWidth={1.5} />,
    },
    {
        title: 'Doctors',
        link: 'doctors',
        icon: <Stethoscope strokeWidth={1.5} />,
    },
    {
        title: 'Settings',
        icon: <Settings strokeWidth={1.5} />,
        child: [
            {
                title: 'Master Settings',
                link: 'settings/master',
            },
            {
                title: 'Role & Permission',
                child: [
                    {
                        title: 'Role',
                        link: 'settings/role-permission/roles',
                    },
                    {
                        title: 'Permission',
                        link: 'settings/role-permission/permissions',
                    },
                ],
            },
        ],
    },
];

export default MenuItems;
