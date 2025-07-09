import { lazy } from 'react';
import MainLayout from '@layouts/MainLayout';

import MasterSetting from '@views/Settings/MasterSettings';
import SettingInfo from '@views/Settings/MasterSettings/SettingInfo';
import Diagnosis from '@views/Settings/MasterSettings/Diagnosis';
import Diseases from '@views/Settings/MasterSettings/Diseases';
import InsuranceCompanies from '@views/Settings/MasterSettings/InsuranceCompanies';
import Doctors from '@views/Doctors';
import EditDoctor from '@views/Doctors/EditDoctor';
import AddDoctor from '@views/Doctors/AddDoctor';
import Loadable from '@utils/Loadable';
import ErrorBoundary from './ErrorBoundary';
import AddRole from '@views/Settings/RolePermission/Roles/AddRole';
import { checkPermission } from '@utils/classUtils';
import AddEditDoctor from '@views/Doctors/AddEditDoctor';

const Dashboard = Loadable(lazy(() => import('@views/Dashboard')));

// Appointments
const Appointment = Loadable(lazy(() => import('@views/Appointment')));

// Patients
const Patient = Loadable(lazy(() => import('@views/Patient')));
const AddPatient = Loadable(lazy(() => import('@views/Patient/AddPatient')));
const EditPatient = Loadable(lazy(() => import('@views/Patient/EditPatient')));
const PatientDetails = Loadable(lazy(() => import('@views/Patient/PatientDetails')));

const RolePage = Loadable(lazy(() => import('@views/Settings/RolePermission/Roles')));

// Laboratories
const LaboratoryPage = Loadable(lazy(() => import('@views/Laboratory')));
const LabAddPage = Loadable(lazy(() => import('@views/Laboratory/AddLab')));

// MasterSettings
const HospitalsPage = Loadable(lazy(() => import('@views/Settings/MasterSettings/Hospitals')));
const DevicePage = Loadable(lazy(() => import('@views/Settings/MasterSettings/Device')));

const PackagePage = Loadable(lazy(() => import('@views/Settings/Packages')));

const hasPermission = (permission = null) => {
    const permissions = checkPermission(permission);
    if (permissions) {
        return true;
    } else {
        throw new Error('Forbidden');
    }
};

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
            errorElement: <ErrorBoundary />,
        },
        { path: 'calender', element: <div>Calender</div> },
        { path: 'appointments', element: <Appointment /> },

        {
            path: 'doctors',
            children: [
                {
                    path: '',
                    element: <Doctors />,
                    loader: () => {
                        hasPermission('doctor-list');
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
                {
                    path: 'create',
                    element: <AddEditDoctor />,
                    loader: () => {
                        hasPermission('doctor-create');
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
                {
                    path: 'edit/:id',
                    element: <AddEditDoctor />,
                    loader: () => {
                        hasPermission('doctor-edit');
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
            ],
        },
        {
            path: 'patients',
            children: [
                {
                    path: '',
                    element: <Patient />,
                    loader: () => {
                        hasPermission('patient-list');
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
                {
                    path: 'create',
                    element: <AddPatient />,
                    loader: () => {
                        hasPermission('patient-create');
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
                {
                    path: 'edit/:id',
                    element: <AddPatient />,
                    loader: () => {
                        hasPermission('patient-edit');
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
                {
                    path: 'details/:id',
                    element: <PatientDetails />,
                    loader: () => {
                        hasPermission();
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
            ],
        },

        {
            path: 'laboratory',
            children: [
                {
                    path: '',
                    element: <LaboratoryPage />,
                    loader: () => {
                        hasPermission();
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
                {
                    path: 'create',
                    element: <LabAddPage />,
                    loader: () => {
                        hasPermission();
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
                {
                    path: ':labID/edit',
                    element: <div>Edit Lab</div>,
                    loader: () => {
                        hasPermission();
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
            ],
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
                    path: 'hospitals',
                    element: <HospitalsPage />,
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
                {
                    path: 'devices',
                    element: <DevicePage />,
                },
            ],
        },
        {
            path: 'settings/roles',
            children: [
                {
                    path: '',
                    element: <RolePage />,
                    loader: () => {
                        hasPermission('role-list');
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
                {
                    path: 'create',
                    element: <AddRole />,
                    loader: () => {
                        hasPermission('role-create');
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
                {
                    path: ':id/edit',
                    element: <AddRole />,
                    loader: () => {
                        hasPermission('role-edit');
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
            ],
        },
        {
            path: 'settings/packages',
            children: [
                {
                    path: '',
                    element: <PackagePage />,
                },
                {
                    path: 'create',
                    element: <div>Create Packages</div>,
                },
                {
                    path: 'edit/:id',
                    element: <div>Edit Packages</div>,
                },
            ],
        },
    ],
};

export default PrivateRoutes;
