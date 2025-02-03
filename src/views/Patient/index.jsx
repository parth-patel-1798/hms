import React, { useState } from 'react';
import { LuMail, LuPhone } from 'react-icons/lu';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { FiFilter, FiPlusCircle } from 'react-icons/fi';

import Pagination from '@components/Pagination';
import Avatar1 from '@assets/images/avatars/avatar1.jpg';
import PatientData from './PatientData.json';
import PatientFilter from './PatientFilter';
import Model from '@components/Model';
import { MdOutlineInfo } from 'react-icons/md';

const Patient = () => {
    const navigation = useNavigate();
    const [openFilter, setOpenFilter] = useState(false);
    return (
        <React.Fragment>
            <div className="flex flex-col gap-2">
                {/* Breadcrumb */}
                <div>
                    <label className="flex items-center gap-2">
                        <span className="font-semibold">Patients</span>
                    </label>
                    <small className="text-xs font-normal text-gray-500">{`Dashboard > Patients`}</small>
                </div>

                {/* List */}
                <div className="bg-white grid grid-cols-1 gap-3 p-2 rounded-lg">
                    <div className="flex flex-col sm:flex-row gap-2 items-center">
                        <span className="flex-grow font-medium w-full">Patients List</span>
                        <div className="flex gap-2 w-full sm:w-auto">
                            <button
                                className="p-2 w-full md:w-auto rounded-md border inline-flex gap-1 items-center"
                                onClick={() => navigation('create')}
                            >
                                <FiPlusCircle className="text-gray-500" />
                                <span className="text-sm font-medium text-gray-500 cursor-pointer">Add</span>
                            </button>
                            <button
                                className="p-2 w-full md:w-auto rounded-md border inline-flex gap-1 items-center"
                                onClick={() => setOpenFilter(true)}
                            >
                                <FiFilter className="text-gray-500" />
                                <span className="text-sm font-medium text-gray-500 cursor-pointer">Filter</span>
                            </button>
                        </div>
                        <input
                            type="search"
                            className="border rounded-md p-2 outline-none text-sm w-full sm:w-52"
                            placeholder="Search"
                        />
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border-gray-300">
                            <thead className="text-sm font-normal w-full bg-gray-200">
                                <tr className="text-left">
                                    <th className="p-2 font-semibold">Name</th>
                                    <th className="p-2 font-semibold">Age</th>
                                    <th className="p-2 font-semibold">Contact Info</th>
                                    <th className="p-2 font-semibold">Address</th>
                                    <th className="p-2 font-semibold text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="border-b">
                                {PatientData.map((patient) => (
                                    <PatientRow
                                        key={patient.id}
                                        patient={patient}
                                        handleEdit={() => navigation(`edit/${patient.id}`)}
                                        handleDetails={() => navigation(`details/${patient.id}`)}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination />
                </div>
            </div>
            <Model open={openFilter} onClose={() => setOpenFilter(false)} title="Patient Filter">
                <PatientFilter onClose={() => setOpenFilter(false)} />
            </Model>
        </React.Fragment>
    );
};

export default Patient;

const PatientRow = React.memo(({ patient, handleEdit, handleDetails }) => {
    return (
        <tr className="bg-white hover:bg-gray-100 rounded-md items-center">
            <td className="p-2 flex gap-2">
                <img src={Avatar1} className="h-10 rounded-full" alt="Avatar" />
                <div className="truncate">
                    <span className="text-sm font-semibold text-slate-900">{patient.name}</span>
                    <small className="block text-xs text-gray-600">{patient.id}</small>
                </div>
            </td>
            <td className="p-2">{patient.age}</td>
            <td className="p-2 text-xs font-normal truncate">
                <span className="inline-flex gap-1 items-center">
                    <LuMail /> {patient.email}
                </span>
                <span className="flex gap-1 items-center">
                    <LuPhone /> {patient.phone}
                </span>
            </td>
            <td className="p-2 text-xs font-normal truncate">{patient.address}</td>
            <td className="p-2 float-right flex gap-2">
                <button className="text-sky-900 cursor-pointer text-lg" onClick={() => handleDetails()}>
                    <MdOutlineInfo />
                </button>
                <button className="text-slate-900 cursor-pointer" onClick={() => handleEdit()}>
                    <GrEdit />
                </button>
                <button className="text-red-800 cursor-pointer">
                    <RiDeleteBinLine />
                </button>
            </td>
        </tr>
    );
});
