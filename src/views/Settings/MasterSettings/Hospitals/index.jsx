import Typography from '@components/Typography';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { FiFilter } from 'react-icons/fi';
import { MdAddCircle, MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

import JsonData from './HospitalData.json';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';

const Hospitals = () => {
    const navigate = useNavigate();
    const [openAddModel, setOpenAddModel] = useState(false);
    return (
        <div className="grid grid-cols-1 gap-2">
            <div className="flex flex-col sm:flex-row gap-2 items-center pt-1">
                <div className="flex-1 inline-flex w-full justify-between items-center">
                    <button
                        className="inline-flex lg:hidden p-2 rounded-full items-center gap-1 text-slate-800 bg-gray-200/35"
                        onClick={() => navigate(-1)}
                    >
                        <FaArrowLeft className="text-sm" />
                    </button>
                    <Typography variant="body1" className="font-medium truncate">
                        Hospitals & clinics
                    </Typography>
                    <button
                        className="text-cyan-800 px-3 py-0.5 font-medium inline-flex gap-1 items-center"
                        onClick={() => setOpenAddModel(true)}
                    >
                        <MdAddCircle /> <Typography variant="body2">Add</Typography>
                    </button>
                </div>
                <div className="inline-flex w-full sm:w-auto items-center gap-2">
                    <button className="p-2 md:w-auto rounded-md border inline-flex gap-1 items-center">
                        <FiFilter className="text-gray-500" />
                        <span className="hidden sm:block text-sm font-medium text-gray-500 cursor-pointer">Filter</span>
                    </button>
                    <input
                        type="search"
                        className="border rounded-md p-2 outline-none text-sm w-full sm:w-52"
                        placeholder="Search"
                    />
                </div>
            </div>
            <hr />
            <div className="overflow-auto">
                <SimpleBar style={{ maxHeight: '100%' }}>
                    <table className="min-w-full md:max-w-full">
                        <thead className="text-sm font-normal bg-gray-200">
                            <tr className="text-left">
                                <th className="p-2 font-semibold">Name</th>
                                <th className="p-2 font-semibold">Address</th>
                                <th className="p-2 font-semibold text-center">Status</th>
                                <th className="p-2 font-semibold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {JsonData.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="p-2">
                                        <Typography variant="body2">{item.name}</Typography>
                                    </td>
                                    <td className="p-2">
                                        <Typography variant="body2">{item.address}</Typography>
                                    </td>
                                    <td className="p-2 text-center">
                                        <Typography
                                            component="span"
                                            variant="caption"
                                            className={`${item.status ? 'bg-green-500' : 'bg-red-500'} text-white px-1.5 py-0.5 rounded-lg`}
                                        >
                                            {item.status ? 'Activate' : 'Inactive'}
                                        </Typography>
                                    </td>
                                    <td className="p-2 text-right">
                                        <button
                                            className="text-slate-900 cursor-pointer p-1.5"
                                            aria-label="Edit diagnosis"
                                        >
                                            <GrEdit />
                                        </button>
                                        <button className="text-red-800 cursor-pointer" aria-label="Delete diagnosis">
                                            <RiDeleteBinLine />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </SimpleBar>
            </div>
            <hr />
            <div className="justify-end items-center inline-flex gap-2 w-full text-sm">
                <span>Row per page :</span>
                <select className="bg-inherit p-1 rounded-md outline-none">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                    <option>All</option>
                </select>
                <span>1-10 of 10</span>
                <button className="text-lg text-gray-500 focus:text-slate-800">
                    <MdOutlineChevronLeft />
                </button>
                <button className="text-lg text-gray-500 focus:text-slate-800">
                    <MdOutlineChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Hospitals;
