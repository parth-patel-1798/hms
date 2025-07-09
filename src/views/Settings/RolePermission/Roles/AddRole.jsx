import React, { useEffect } from 'react';
import { RoleAddUpdateAPI, RolePermissionListAPI } from '@apis/Role';
import { useMutation, useQuery } from '@tanstack/react-query';
import Typography from '@components/Typography';
import TextFiled from '@components/TextField';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddRole = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { role } = location.state || {};
    const title = role ? 'Edit Role' : 'Create Role';
    const { data, isLoading } = useQuery({ queryKey: ['role-permissions'], queryFn: RolePermissionListAPI });

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: {
            name: role?.name || '',
            description: role?.description || '',
            permissions: role?.permission || [],
        },
    });

    useEffect(() => {
        if (role) {
            reset({
                id: role.uuid,
                name: role.name,
                description: role.description,
                permissions: role.permission || [],
            });
        }
    }, [role, reset]);

    const permissions = watch('permissions');
    // Handle checkbox change
    const handlePermissionChange = (permission) => {
        const updatedPermissions = permissions.some((p) => p.uuid === permission.uuid)
            ? permissions.filter((p) => p.uuid !== permission.uuid) // Remove if already exists
            : [...permissions, permission]; // Add if not exists

        setValue('permissions', updatedPermissions);
    };

    const mutation = useMutation({
        mutationFn: (data) => RoleAddUpdateAPI(data),
        onSuccess: (response) => {
            navigate('/settings/roles', { replace: true });
            toast.success(response.message);
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const onSubmit = (data) => {
        data.permissions = data.permissions.map((item) => item.name);
        mutation.mutateAsync(data);
    };

    return (
        <div className="flex flex-col gap-2">
            {/* Breadcrumb */}
            <div>
                <label className="flex items-center gap-2">
                    <span className="font-semibold">{title}</span>
                </label>
                <small className="text-xs font-normal text-gray-500">{`Dashboard > Role > ${title}`}</small>
            </div>

            <div className="bg-white w-full p-3 rounded-md">
                <div className="pb-3 pt-2">
                    <Typography className="font-medium">{title}</Typography>
                </div>
                {/* Form */}
                <form className="grid grid-cols-5 gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-span-2">
                        <div className="px-2 grid grid-cols-1 gap-2">
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">Name</Typography>
                                <TextFiled
                                    size="small"
                                    placeholder="Name"
                                    name="name"
                                    {...register('name')}
                                    error={Boolean(errors?.name)}
                                    errorText={Boolean(errors.name) && errors.name.message}
                                />
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">Description</Typography>
                                <textarea
                                    {...register('description')}
                                    className="rounded-md border outline-none w-full"
                                ></textarea>
                                {errors.description && (
                                    <p className="text-red-500 text-xs">{errors.description.message}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <p className="pb-2 font-medium">Permission List :</p>
                        {isLoading ? (
                            'Loading...'
                        ) : (
                            <div className="grid grid-cols-2 gap-2">
                                {data?.data &&
                                    Object.keys(data.data).map((obj, index) => (
                                        <div className="" key={index}>
                                            <p className="text-sm capitalize">{obj}</p>
                                            <div className="pl-2">
                                                <div className="grid">
                                                    {data.data[obj].map((row, idx) => (
                                                        <div className="flex gap-2 items-center" key={idx}>
                                                            <input
                                                                id={`${obj}-${row.uuid}`}
                                                                type="checkbox"
                                                                checked={permissions.some((p) => p.uuid === row.uuid)}
                                                                onChange={() => handlePermissionChange(row)}
                                                            />
                                                            <label
                                                                htmlFor={`${obj}-${row.uuid}`}
                                                                className="text-sm cursor-pointer"
                                                            >
                                                                {row.title}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                    <div className="col-span-5 flex gap-2 justify-end border-t pt-3 mt-3">
                        <button
                            className="px-3 py-1.5 border border-gray-500 text-gray-600 rounded-md"
                            type="button"
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="px-3 py-1.5 text-white rounded-md bg-teal-700 focus:bg-teal-900 outline-none"
                            disabled={isLoading}
                        >
                            Save & Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRole;
