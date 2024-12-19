import Pagination from '@components/Pagination';
import Typography from '@components/Typography';
import { FiFilter, FiPlusCircle } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Packages = () => {
    // const { data, isLoading, refetch } = useQuery({ queryKey: ['packages'], queryFn: PackageListAPI });
    // console.log('data :', data);
    return (
        <div className="flex flex-col h-full gap-2">
            {/* Breadcrumbs */}
            <div className="inline-flex gap-2">
                <div>
                    <label className="flex items-center gap-2">
                        <span className="font-semibold">Packages</span>
                    </label>
                    <small className="text-xs font-normal text-gray-500">{`Dashboard > Settings > Packages`}</small>
                </div>
            </div>

            {/* Content */}
            <div className="bg-white grid grid-cols-1 gap-3 p-2 rounded-lg">
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                    <div className="flex-1 inline-flex w-full justify-between items-center">
                        <Typography variant="body1" className="font-medium truncate">
                            Package List
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
                    </table>
                </div>
                <hr />
                <Pagination />
            </div>
        </div>
    );
};

export default Packages;
