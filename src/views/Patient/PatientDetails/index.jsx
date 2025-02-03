import React from 'react';
import ProfilePicture from '@assets/images/ProfilePicture.webp';
import { NavLink, useLocation, useParams, useSearchParams } from 'react-router-dom';
import PatientInformation from './PatientInformation';
import Appointments from './Appointments';
import MedicalHistory from './MedicalHistory';

const PatientDetails = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const activeTab = params.get('tab') || 'info';
    return (
        <div className="flex flex-col gap-2">
            {/* Breadcrumb */}
            <div>
                <label className="flex items-center gap-2">
                    <span className="font-semibold">Patient Details</span>
                </label>
                <small className="text-xs font-normal text-gray-500">{`Dashboard > Patients > Details`}</small>
            </div>

            {/* Details */}
            <div className="bg-white w-full p-3 rounded-md flex flex-col gap-3">
                <div className="flex gap-2 items-end">
                    <img src={ProfilePicture} alt="patient picture" className="h-14 rounded-lg bg-slate-300" />
                    <div className="flex flex-col">
                        <span className="">Patient Name</span>
                        <small className="text-xs text-slate-500">Other details</small>
                    </div>
                </div>

                {/*  */}
                <div className="flex gap-2 border-b">
                    <NavLink
                        to={'?tab=info'}
                        className={() =>
                            `text-xs px-2 ${activeTab === 'info' ? 'text-emerald-600 font-medium border-b border-emerald-600 pb-1.5' : 'text-gray-500'}`
                        }
                    >
                        Patient Information
                    </NavLink>
                    <NavLink
                        to={'?tab=appointment'}
                        className={() =>
                            `text-xs px-2 ${activeTab === 'appointment' ? 'text-emerald-600 font-medium border-b border-emerald-600 pb-1.5' : 'text-gray-500'}`
                        }
                    >
                        Appointments
                    </NavLink>
                    <NavLink
                        to={'?tab=medical'}
                        className={() =>
                            `text-xs px-2 ${activeTab === 'medical' ? 'text-emerald-600 font-medium border-b border-emerald-600 pb-1.5' : 'text-gray-500'}`
                        }
                    >
                        Medical History
                    </NavLink>
                </div>

                {/* Tab Details */}
                <div className="flex">
                    {activeTab === 'info' && <PatientInformation />}
                    {activeTab === 'appointment' && <Appointments />}
                    {activeTab === 'medical' && <MedicalHistory />}
                </div>
            </div>
        </div>
    );
};

export default PatientDetails;
