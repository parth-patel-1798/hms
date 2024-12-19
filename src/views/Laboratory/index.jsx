import { LaboratoryListAPI } from '@apis/Laboratory';
import Pagination from '@components/Pagination';
import Typography from '@components/Typography';
import { useQuery } from '@tanstack/react-query';
import { FiFilter, FiPlusCircle } from 'react-icons/fi';
import { GrEdit } from 'react-icons/gr';
import { MdOutlineDeviceThermostat } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Laboratory = () => {
    const { data, isLoading, refetch } = useQuery({ queryKey: ['laboratories'], queryFn: LaboratoryListAPI });

    return (
        <div className="flex flex-col h-full gap-2">
            {/* Breadcrumbs */}
            <div className="inline-flex gap-2">
                <div>
                    <label className="flex items-center gap-2">
                        <span className="font-semibold">Laboratories</span>
                    </label>
                    <small className="text-xs font-normal text-gray-500">{`Dashboard > Laboratories`}</small>
                </div>
            </div>

            <div className="bg-white grid grid-cols-1 gap-3 p-2 rounded-lg">
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                    <div className="flex-1 inline-flex w-full justify-between items-center">
                        <Typography variant="body1" className="font-medium truncate">
                            Laboratory List
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
                                <th className="p-2 font-semibold">Contact Info</th>
                                <th className="p-2 font-semibold">Address</th>
                                <th className="p-2 font-semibold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="border-b">
                            {data?.data.map((item, idx) => (
                                <tr className="bg-white hover:bg-gray-100 rounded-md" key={idx}>
                                    <td className="p-2 truncate">
                                        <Typography variant="body2">{item.name}</Typography>
                                    </td>
                                    <td className="p-2">
                                        <Typography variant="body2">{item.phone}</Typography>
                                    </td>
                                    <td className="p-2">
                                        <Typography variant="body2">
                                            {item.address_line_1}, {item.address_line_2} - {item.city}
                                        </Typography>
                                    </td>
                                    <td className="p-2 float-right flex gap-2">
                                        <NavLink to={`${item.uuid}/edit`} className="text-slate-900 cursor-pointer">
                                            <GrEdit />
                                        </NavLink>
                                        <button className="text-red-800 cursor-pointer">
                                            <RiDeleteBinLine />
                                        </button>
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

export default Laboratory;
