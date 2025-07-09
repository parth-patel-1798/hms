import React from 'react';
import Button from '@components/Button';
import Typography from '@components/Typography';
import { FaRegClock, FaUserDoctor, FaUserInjured } from 'react-icons/fa6';
import { FiFilter, FiPlusCircle } from 'react-icons/fi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RiErrorWarningLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Appointment = () => {
    return (
        <div className="flex flex-col gap-2 h-full">
            {/* Breadcrumb */}
            <div>
                <label className="flex items-center gap-2">
                    <span className="font-semibold">Appointments</span>
                </label>
                <small className="text-xs font-normal text-gray-500">{`Dashboard > Appointment`}</small>
            </div>

            <div className="bg-white grid grid-cols-1 gap-3 p-2 rounded-lg">
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                    <div className="flex-1 inline-flex w-full justify-between items-center">
                        <Typography variant="body1" className="font-medium truncate">
                            Appointment List
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

                <div className="flex flex-col gap-2">
                    {Array.from({ length: 10 }).map((_, idx) => (
                        <div key={idx} className="border rounded-md flex p-2 items-center gap-2">
                            <div className="text-center px-5 border-r-2">
                                <span className="font-semibold block">28</span>
                                <span className="font-semibold">Feb</span>
                            </div>
                            <div className="flex-1 text-center px-5 flex gap-5">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <small className="font-semibold">
                                            <FaUserInjured />
                                        </small>
                                        <small className="font-medium text-xs text-gray-700">John Doe</small>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <small className="font-semibold">
                                            <FaUserDoctor />
                                        </small>
                                        <small className="font-medium text-xs text-gray-700">DR. John Doe</small>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <small className="font-semibold">
                                            <FaRegClock />
                                        </small>
                                        <small className="font-medium text-xs text-gray-700">10:00 - 10:30</small>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <small className="font-semibold text-sm">
                                            <RiErrorWarningLine />
                                        </small>
                                        <small className="font-medium text-xs text-gray-700 truncate w-64">
                                            Consultation for fever, cough, pain, fatigue, infections, or any unusual
                                            symptoms.
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <small className="px-2 py-1 rounded-full text-xs bg-yellow-200">Scheduled</small>
                                {/* <small>In Progress</small>
                            <small>Do Tests</small>
                            <small>Completed</small> */}
                            </div>
                            <div className="text-center">
                                <Button className="flex gap-1 items-center p-2 bg-gray-200 hover:bg-gray-700 rounded-md hover:text-white text-xs">
                                    Edit
                                    <MdOutlineKeyboardArrowDown className="text-lg" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Appointment;
