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
const Dashboard = Loadable(lazy(() => import('@views/Dashboard')));

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

const checkPermission = () => {
    const hasPermission = true;
    if (!hasPermission) {
        throw new Error('Forbidden');
    }
    return true;
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
            loader: () => {
                checkPermission();
                return true;
            },
            errorElement: <ErrorBoundary />,
        },
        { path: 'calender', element: <div>Calender</div> },
        {
            path: 'patients',
            element: <Patient />,
            loader: () => {
                checkPermission();
                return true;
            },
            errorElement: <ErrorBoundary />,
        },
        {
            path: 'doctors',
            children: [
                {
                    path: '',
                    element: <Doctors />,
                    loader: () => {
                        checkPermission();
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
                {
                    path: 'create',
                    element: <AddDoctor />,
                    loader: () => {
                        checkPermission();
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
                {
                    path: 'edit/:id',
                    element: <EditDoctor />,
                    loader: () => {
                        checkPermission();
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
            ],
        },
        {
            path: 'patients/create',
            element: <AddPatient />,
            loader: () => {
                checkPermission();
                return true;
            },
            errorElement: <ErrorBoundary />,
        },
        {
            path: 'patients/edit/:id',
            element: <EditPatient />,
            loader: () => {
                checkPermission();
                return true;
            },
            errorElement: <ErrorBoundary />,
        },
        {
            path: 'patients/details/:id',
            element: <PatientDetails />,
            loader: () => {
                checkPermission();
                return true;
            },
            errorElement: <ErrorBoundary />,
        },
        {
            path: 'laboratory',
            children: [
                {
                    path: '',
                    element: <LaboratoryPage />,
                    loader: () => {
                        checkPermission();
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
                {
                    path: 'create',
                    element: <LabAddPage />,
                    loader: () => {
                        checkPermission();
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
                {
                    path: ':labID/edit',
                    element: <div>Edit Lab</div>,
                    loader: () => {
                        checkPermission();
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
                        checkPermission();
                        return true;
                    },
                    errorElement: <ErrorBoundary />,
                },
                {
                    path: 'create',
                    element: <AddRole />,
                    loader: () => {
                        checkPermission();
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
