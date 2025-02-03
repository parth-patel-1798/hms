import React from 'react';
import Pagination from '@components/Pagination';
import Typography from '@components/Typography';
import { FiFilter, FiPlusCircle } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import DoctorData from './DoctorData.json';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';
import { LuMail, LuPhone } from 'react-icons/lu';
import { MdOutlineInfo } from 'react-icons/md';

const Doctors = () => {
    return (
        <div className="flex flex-col gap-2">
            {/* Breadcrumb */}
            <div>
                <label className="flex items-center gap-2">
                    <span className="font-semibold">Doctors</span>
                </label>
                <small className="text-xs font-normal text-gray-500">{`Dashboard > Doctors`}</small>
            </div>

            {/* List */}
            <div className="bg-white grid grid-cols-1 gap-3 p-2 rounded-lg">
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                    <div className="flex-1 inline-flex w-full justify-between items-center">
                        <Typography variant="body1" className="font-medium truncate">
                            Doctors List
                        </Typography>

                        <NavLink
                            className="rounded-md border p-2 font-medium inline-flex gap-1 items-center"
                            to={'create'}
                        >
                            <FiPlusCircle className="text-gray-500" />
                            <span className="text-sm font-medium text-gray-500 cursor-pointer">Add</span>
                        </NavLink>
                    </div>
                    <div className="inline-flex w-full sm:w-auto items-center gap-2">
                        <button className="p-2.5 sm:p-2 md:w-auto rounded-md border inline-flex gap-1 items-center">
                            <FiFilter className="text-gray-500" />
                            <span className="hidden sm:block text-sm font-medium text-gray-500 cursor-pointer">
                                Filter
                            </span>
                        </button>
                        <input
                            type="search"
                            className="border rounded-md p-2 outline-none text-sm w-full sm:w-52"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border-gray-300">
                        <thead className="text-sm font-normal w-full bg-gray-200">
                            <tr className="text-left">
                                <th className="p-2 font-semibold">Name</th>
                                <th className="p-2 font-semibold">Hospital/Clinic</th>
                                <th className="p-2 font-semibold">Contact Info</th>
                                <th className="p-2 font-semibold">Address</th>
                                <th className="p-2 font-semibold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="border-b">
                            {DoctorData.map((doctor, idx) => (
                                <tr className="bg-white hover:bg-gray-100 rounded-md " key={idx}>
                                    <td className="p-2 truncate">
                                        <p className="text-sm font-semibold text-slate-900">{doctor.name}</p>
                                        <small className="block text-xs text-gray-600">{doctor.specialty}</small>
                                    </td>
                                    <td className="p-2 text-sm">{doctor.hospital}</td>
                                    <td className="p-2 text-xs font-normal truncate">
                                        <span className="inline-flex gap-1 items-center">
                                            <LuMail /> {doctor.email}
                                        </span>
                                        <span className="flex gap-1 items-center">
                                            <LuPhone /> {doctor.phone}
                                        </span>
                                    </td>
                                    <td className="p-2 text-xs font-normal truncate">{`${doctor.address.street}, ${doctor.address.city}`}</td>
                                    <td className="p-2 ">
                                        <div className="inline-flex items-center gap-2 float-end h-full">
                                            <NavLink className="text-slate-900 cursor-pointer" to={`edit/${doctor.id}`}>
                                                <GrEdit />
                                            </NavLink>
                                            <button className="text-red-800 cursor-pointer">
                                                <RiDeleteBinLine />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination />
            </div>
        </div>
    );
};

export default Doctors;
