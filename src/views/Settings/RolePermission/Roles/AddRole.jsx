import React from 'react';
import { RolePermissionListAPI } from '@apis/Role';
import { useQuery } from '@tanstack/react-query';
import Typography from '@components/Typography';
import TextFiled from '@components/TextFiled';

const AddRole = () => {
    const { data, isLoading } = useQuery({ queryKey: ['role-permissions'], queryFn: RolePermissionListAPI });

    return (
        <div className="flex flex-col gap-2">
            {/* Breadcrumb */}
            <div>
                <label className="flex items-center gap-2">
                    <span className="font-semibold">Create Role</span>
                </label>
                <small className="text-xs font-normal text-gray-500">{`Dashboard > Role > Create Role`}</small>
            </div>

            <div className="bg-white w-full p-3 rounded-md">
                <div className="pb-3 pt-2">
                    <Typography className="font-medium">Create Role</Typography>
                </div>
                {/* Form */}
                <form className="grid grid-cols-5 gap-2">
                    <div className="col-span-2">
                        <div className="px-2 grid grid-cols-1 gap-2">
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">Name</Typography>
                                <TextFiled
                                    size="small"
                                    placeholder="Name"
                                    // {...register('name')}
                                    // name="name"
                                    // error={Boolean(errors?.name)}
                                    // errorText={Boolean(errors.name) && errors.name.message}
                                />
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">Description</Typography>
                                <textarea className="rounded-md border outline-none w-full"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <p className="pb-2 font-medium">Permission List :</p>
                        <div className="grid grid-cols-2 gap-2">
                            {data?.data &&
                                Object.keys(data.data).map((obj, index) => (
                                    <div className="" key={index}>
                                        <p className="text-sm capitalize">{obj}</p>
                                        <div className="pl-2">
                                            <div className="grid">
                                                {data.data[obj].map((row, idx) => (
                                                    <div className="flex gap-2 items-center" key={idx}>
                                                        <input id={obj} type="checkbox" />
                                                        <label htmlFor={obj} className="text-sm cursor-pointer">
                                                            {row.title}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRole;
