import { RoleListAPI } from '@apis/Role';
import Pagination from '@components/Pagination';
import Typography from '@components/Typography';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FiFilter, FiPlusCircle } from 'react-icons/fi';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';
import AddForm from './AddForm';
import Model from '@components/Model';
import { NavLink } from 'react-router-dom';

const Roles = () => {
    const [openModel, setOpenModel] = useState(false);
    const [editData, setEditData] = useState(null);
    const { data, isLoading, refetch } = useQuery({ queryKey: ['roles'], queryFn: RoleListAPI });

    const closeHandler = (isReload = false) => {
        setOpenModel(false);
        setEditData(null);
        if (isReload) {
            refetch();
        }
    };

    const updateHandler = (item) => {
        setEditData(item);
        setOpenModel(true);
    };

    return (
        <>
            <div className="flex flex-col gap-2">
                {/* Breadcrumb */}
                <div>
                    <label className="flex items-center gap-2">
                        <span className="font-semibold">Roles</span>
                    </label>
                    <small className="text-xs font-normal text-gray-500">{`Dashboard > Settings > Roles`}</small>
                </div>

                {/* List */}
                <div className="bg-white grid grid-cols-1 gap-3 p-2 rounded-lg">
                    <div className="flex flex-col sm:flex-row gap-2 items-center">
                        <div className="flex-1 inline-flex w-full justify-between items-center">
                            <Typography variant="body1" className="font-medium truncate">
                                Roles List
                            </Typography>

                            <NavLink
                                className="rounded-md border p-2 font-medium inline-flex gap-1 items-center"
                                to="create"
                            >
                                <FiPlusCircle className="text-gray-500" />
                                <span className="text-sm font-medium text-gray-500 cursor-pointer">Add</span>
                            </NavLink>
                            {/* <div
                                className="rounded-md border p-2 font-medium inline-flex gap-1 items-center"
                                onClick={() => setOpenModel(true)}
                            >
                                <FiPlusCircle className="text-gray-500" />
                                <span className="text-sm font-medium text-gray-500 cursor-pointer">Add</span>
                            </div> */}
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
                                    <th className="p-2 font-semibold text-center">Status</th>
                                    <th className="p-2 font-semibold text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.data.map((item, idx) => (
                                    <tr className="bg-white hover:bg-gray-100 rounded-md " key={idx}>
                                        <td className="p-2 truncate">
                                            <Typography variant="body2">{item.name}</Typography>
                                        </td>
                                        <td className="p-2 text-center">
                                            <Typography
                                                component="span"
                                                variant="caption"
                                                className={`bg-green-500 text-white px-1.5 py-0.5 rounded-lg`}
                                            >
                                                Activate
                                            </Typography>
                                        </td>

                                        <td className="p-2 ">
                                            <div className="inline-flex items-center gap-2 float-end h-full">
                                                <div
                                                    className="text-slate-900 cursor-pointer"
                                                    onClick={() => updateHandler(item)}
                                                >
                                                    <GrEdit />
                                                </div>
                                                {/* <NavLink className="text-slate-900 cursor-pointer" to={`#`}>
                                                    <GrEdit />
                                                </NavLink> */}
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
                    <hr />
                    <Pagination />
                </div>
            </div>
            <Model
                open={openModel}
                onClose={() => setOpenModel(false)}
                title={editData ? `Edit ${editData.name} Role` : 'Add Role'}
            >
                <AddForm onClose={closeHandler} role={editData} />
            </Model>
        </>
    );
};

export default Roles;
