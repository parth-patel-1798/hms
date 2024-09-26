import React from 'react';
import MainLayout from '@layouts/MainLayout';
import Dashboard from '@views/Dashboard';
import Patient from '@views/Patient';
import AddPatient from '@views/Patient/AddPatient';
import EditPatient from '@views/Patient/EditPatient';
import MasterSetting from '@views/Settings/MasterSettings';
import SettingInfo from '@views/Settings/MasterSettings/SettingInfo';
import Diagnosis from '@views/Settings/MasterSettings/Diagnosis';
import Diseases from '@views/Settings/MasterSettings/Diseases';
import InsuranceCompanies from '@views/Settings/MasterSettings/InsuranceCompanies';
import Doctors from '@views/Doctors';
import Roles from '@views/Settings/RolePermission/Roles';

const PrivateRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'profile',
            element: <div>Profile</div>,

            errorElement: <div>Error </div>,
        },
        {
            path: 'dashboard',
            element: <Dashboard />,
        },
        {
            path: 'patients',
            element: <Patient />,
        },
        {
            path: 'doctors',
            children: [
                {
                    path: '',
                    element: <Doctors />,
                },
                {
                    path: 'create',
                    element: <Doctors />,
                },
                {
                    path: 'edit/:id',
                    element: <Doctors />,
                },
            ],
        },
        {
            path: 'patients/create',
            element: <AddPatient />,
        },
        {
            path: 'patients/edit/:id',
            element: <EditPatient />,
        },

        {
            path: 'settings/master',
            element: <MasterSetting />,
            children: [
                {
                    path: '',
                    element: <SettingInfo />,
                },
                {
                    path: 'insurance-companies',
                    element: <InsuranceCompanies />,
                },
                {
                    path: 'diagnosis',
                    element: <Diagnosis />,
                },
                {
                    path: 'diseases',
                    element: <Diseases />,
                },
            ],
        },
        {
            path: 'settings/role-permission',
            children: [
                {
                    path: 'roles',
                    element: <Roles />,
                },
                {
                    path: 'permissions',
                    element: <div>Permissions</div>,
                },
            ],
        },
    ],
};

export default PrivateRoutes;
