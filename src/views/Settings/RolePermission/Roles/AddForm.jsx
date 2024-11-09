import React, { useEffect } from 'react';
import Typography from '@components/Typography';
import TextFiled from '@components/TextFiled';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RoleAddUpdateAPI } from '@apis/Role';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const schema = yup.object().shape({
    name: yup.string().required('Role name is required.'),
});

const AddForm = ({ onClose, role }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: role?.name || '',
        },
    });

    useEffect(() => {
        if (role) {
            setValue('name', role.name);
        }
    }, [role, setValue]);

    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => RoleAddUpdateAPI({ ...data, id: role?.id }),
        onSuccess: (response) => {
            if (onClose) onClose(true);
            toast.success(response.message);
        },
        onError: (error) => {
            const { response } = error;
            toast.error(response.data.message);
        },
    });

    return (
        <form className="flex flex-col gap-5 min-w-96" onSubmit={handleSubmit((data) => mutate(data))}>
            <div className="px-2 grid grid-cols-1">
                <div className="col-span-1 md:col-span-3 lg:col-span-6">
                    <Typography variant="body2">Name</Typography>
                    <TextFiled
                        size="small"
                        placeholder="Name"
                        {...register('name')}
                        name="name"
                        error={Boolean(errors?.name)}
                        errorText={Boolean(errors.name) && errors.name.message}
                    />
                </div>
            </div>
            <div className="inline-flex gap-2 justify-end">
                <button
                    className="px-3 py-1 border border-gray-500 text-gray-600 rounded-md"
                    type="reset"
                    onClick={() => {
                        if (onClose) onClose();
                    }}
                >
                    Close
                </button>
                <button
                    type="submit"
                    className="px-3 py-1 text-white rounded-md bg-teal-700 focus:bg-teal-900 outline-none"
                    disabled={isLoading}
                >
                    Save & Next
                </button>
            </div>
        </form>
    );
};

export default AddForm;
