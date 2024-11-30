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
import { HospitalDeleteAPI, HospitalListAPI } from '@apis/Hospital';
import { useMutation, useQuery } from '@tanstack/react-query';
import Pagination from '@components/Pagination';
import Model from '@components/Model';
import HospitalForm from './HospitalForm';
import toast from 'react-hot-toast';

const Hospitals = () => {
    const navigate = useNavigate();
    const [openModel, setOpenModel] = useState(false);
    const [editData, setEditData] = useState(null);

    const { data, isLoading, refetch } = useQuery({ queryKey: ['hospitals'], queryFn: HospitalListAPI });

    const closeHandler = (isReload = false) => {
        setOpenModel(false);
        setEditData(null);
        if (isReload) {
            refetch();
        }
    };

    const { mutate: deleteHospital } = useMutation({
        mutationFn: (data) => HospitalDeleteAPI(data),
        onSuccess: (response) => {
            toast.success(response.message);
            refetch();
        },
    });

    return (
        <>
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
                            onClick={() => setOpenModel(true)}
                        >
                            <MdAddCircle /> <Typography variant="body2">Add</Typography>
                        </button>
                    </div>
                    <div className="inline-flex w-full sm:w-auto items-center gap-2">
                        <button className="p-2 md:w-auto rounded-md border inline-flex gap-1 items-center">
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
                                {data?.data.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="p-2">
                                            <Typography variant="body2">{item.name}</Typography>
                                        </td>
                                        <td className="p-2">
                                            <Typography variant="body2">
                                                {item.address_line_1}, {item.city} {item.postal_code}
                                            </Typography>
                                        </td>
                                        <td className="p-2 text-center">
                                            <Typography
                                                component="span"
                                                variant="caption"
                                                className={`${item.status === 'Active' ? 'bg-green-500' : 'bg-red-500'} text-white px-1.5 py-0.5 rounded-lg`}
                                            >
                                                {item.status}
                                            </Typography>
                                        </td>
                                        <td className="p-2 text-right">
                                            <button
                                                className="text-slate-900 cursor-pointer p-1.5"
                                                aria-label="Edit diagnosis"
                                                onClick={() => {
                                                    setEditData(item);
                                                    setOpenModel(true);
                                                }}
                                            >
                                                <GrEdit />
                                            </button>
                                            <button
                                                className="text-red-800 cursor-pointer"
                                                aria-label="Delete diagnosis"
                                                onClick={() => {
                                                    console.log('id', item.uuid);
                                                    deleteHospital(item.uuid);
                                                }}
                                            >
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
                <Pagination />
            </div>
            <Model
                open={openModel}
                onClose={() => setOpenModel(false)}
                title={editData ? `Edit ${editData.name}` : 'Add Hospital'}
            >
                <HospitalForm onClose={closeHandler} editData={editData} />
            </Model>
        </>
    );
};

export default Hospitals;
