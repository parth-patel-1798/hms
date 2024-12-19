import React from 'react';
import { HospitalAddUpdateAPI } from '@apis/Hospital';
import toast from 'react-hot-toast';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import Typography from '@components/Typography';
import TextFiled from '@components/TextField';
import Select from '@components/Select';
import Button from '@components/Button';

const schema = Yup.object().shape({
    name: Yup.string().required('Hospital name is required.'),
});

const HospitalForm = ({ onClose, editData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            id: editData?.uuid || null,
            name: editData?.name || '',
            email: editData?.email || '',
            phone: editData?.phone || '',
            description: editData?.description || '',
            address_line_1: editData?.address_line_1 || '',
            address_line_2: editData?.address_line_2 || '',
            country: editData?.country || '',
            state: editData?.state || '',
            city: editData?.city || '',
            postal_code: editData?.postal_code || '',
            status: editData?.status || 'Active',
        },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: (data) => HospitalAddUpdateAPI(data),
        onSuccess: (response) => {
            if (onClose) onClose(true);
            console.log('ok', response);
            toast.success(response.message);
        },
        onError: (error) => {
            const { response } = error;
            console.log(error);
            toast.error(response.data.message);
        },
    });

    return (
        <form className="flex flex-col gap-5 min-w-96" onSubmit={handleSubmit((data) => mutate(data))}>
            <div className="px-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="sm:col-span-2">
                    <Typography variant="body2" className="ml-1">
                        Name
                    </Typography>
                    <TextFiled
                        size="small"
                        placeholder="Name"
                        {...register('name')}
                        name="name"
                        error={Boolean(errors?.name)}
                        errorText={Boolean(errors.name) && errors.name.message}
                    />
                </div>
                <div className="">
                    <Typography variant="body2" className="ml-1">
                        Email
                    </Typography>
                    <TextFiled
                        size="small"
                        placeholder="Email"
                        {...register('email')}
                        name="email"
                        error={Boolean(errors?.email)}
                        errorText={Boolean(errors.email) && errors.email.message}
                    />
                </div>
                <div className="">
                    <Typography variant="body2" className="ml-1">
                        Phone number
                    </Typography>
                    <TextFiled
                        size="small"
                        placeholder="Phone number"
                        {...register('phone')}
                        name="phone"
                        error={Boolean(errors?.phone)}
                        errorText={Boolean(errors.phone) && errors.phone.message}
                    />
                </div>
                <div className="sm:col-span-2">
                    <Typography variant="body2">Description</Typography>
                    <TextFiled
                        size="small"
                        placeholder="Description"
                        {...register('description')}
                        name="description"
                        error={Boolean(errors?.description)}
                        errorText={Boolean(errors.description) && errors.description.message}
                    />
                </div>
                <div className="">
                    <Typography variant="body2">Address 1</Typography>
                    <TextFiled
                        size="small"
                        placeholder="Address 1"
                        {...register('address_line_1')}
                        name="address_line_1"
                        error={Boolean(errors?.address_line_1)}
                        errorText={Boolean(errors.address_line_1) && errors.address_line_1.message}
                    />
                </div>
                <div className="">
                    <Typography variant="body2">Address 2</Typography>
                    <TextFiled
                        size="small"
                        placeholder="Address 2"
                        {...register('address_line_2')}
                        name="address_line_2"
                        error={Boolean(errors?.address_line_2)}
                        errorText={Boolean(errors.address_line_2) && errors.address_line_2.message}
                    />
                </div>
                {/* <div className="sm:col-span-2"> */}
                <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="">
                        <Typography variant="body2">Country</Typography>
                        <TextFiled
                            size="small"
                            placeholder="Country"
                            {...register('country')}
                            name="country"
                            error={Boolean(errors?.country)}
                            errorText={Boolean(errors.country) && errors.country.message}
                        />
                    </div>
                    <div className="">
                        <Typography variant="body2">State</Typography>
                        <TextFiled
                            size="small"
                            placeholder="State"
                            {...register('state')}
                            name="state"
                            error={Boolean(errors?.state)}
                            errorText={Boolean(errors.state) && errors.state.message}
                        />
                    </div>
                    <div className="">
                        <Typography variant="body2">City</Typography>
                        <TextFiled
                            size="small"
                            placeholder="City"
                            {...register('city')}
                            name="city"
                            error={Boolean(errors?.city)}
                            errorText={Boolean(errors.city) && errors.city.message}
                        />
                    </div>
                    <div className="">
                        <Typography variant="body2">Postal Code</Typography>
                        <TextFiled
                            size="small"
                            placeholder="Postal Code"
                            {...register('postal_code')}
                            name="postal_code"
                            error={Boolean(errors?.postal_code)}
                            errorText={Boolean(errors.postal_code) && errors.postal_code.message}
                        />
                    </div>
                </div>
                {/* </div> */}
                <div className="sm:col-span-2">
                    <Typography variant="body2">Status</Typography>
                    <Select size="small" {...register('status')} defaultValue="Active">
                        <option className="text-sm">Active</option>
                        <option className="text-sm">Inactive</option>
                    </Select>
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
                <Button
                    type="submit"
                    className="p-2 bg-teal-700 hover:bg-teal-900 rounded-lg text-white"
                    disabled={isPending}
                >
                    Save
                </Button>
            </div>
        </form>
    );
};

export default HospitalForm;
