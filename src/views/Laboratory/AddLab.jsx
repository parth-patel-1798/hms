import React from 'react';
import Typography from '@components/Typography';
import TextFiled from '@components/TextField';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const ValidationSchema = yup.object().shape({
    name: yup.string().required('Laboratory name is required.'),
    phone_number: yup.string().required('Phone number is required.'),
    address_1: yup.string().required('Address 1 is required.'),
    country: yup.string().required('Country is required.'),
    state: yup.string().required('State is required.'),
    city: yup.string().required('City is required.'),
    postal_code: yup.string().required('Postal code is required.'),
    first_name: yup.string().required('First name is required.'),
    last_name: yup.string().required('Last name is required.'),
    user_email: yup.string().required('Email is required.'),
    user_phone: yup.string().required('Phone number is required.'),
});

const AddLab = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(ValidationSchema) });

    const onSubmitFC = (data) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col gap-2">
            <div>
                <label className="flex items-center gap-2">
                    <span className="font-semibold">Create Laboratory</span>
                </label>
                <small className="text-xs font-normal text-gray-500">{`Dashboard > Laboratory > Create Laboratory`}</small>
            </div>

            {/*  */}
            <div className="bg-white w-full p-3 rounded-md">
                <div className="pb-3">
                    <Typography className="font-medium">Create Laboratory</Typography>
                </div>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmitFC)}>
                    <div className="border rounded-md flex flex-col gap-2 py-2">
                        <Typography className="px-2">Laboratory Details</Typography>
                        <hr />
                        <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                            <div className="col-span-1 lg:col-span-2">
                                <Typography variant="body2">Laboratory Name</Typography>
                                <TextFiled
                                    placeholder="Laboratory Name"
                                    size="small"
                                    {...register('name')}
                                    error={Boolean(errors?.name)}
                                    errorText={Boolean(errors.name) && errors.name.message}
                                />
                            </div>
                            <div className="col-span-1 lg:col-span-2">
                                <Typography variant="body2">Phone Number</Typography>
                                <TextFiled
                                    placeholder="Phone Number"
                                    size="small"
                                    {...register('phone_number')}
                                    error={Boolean(errors?.phone_number)}
                                    errorText={Boolean(errors.phone_number) && errors.phone_number.message}
                                />
                            </div>
                            <div className="col-span-1 lg:col-span-2">
                                <Typography variant="body2">Address 1</Typography>
                                <TextFiled
                                    placeholder="Address 1"
                                    size="small"
                                    {...register('address_1')}
                                    error={Boolean(errors?.address_1)}
                                    errorText={Boolean(errors.address_1) && errors.address_1.message}
                                />
                            </div>
                            <div className="col-span-1 lg:col-span-2">
                                <Typography variant="body2">Address 2</Typography>
                                <TextFiled placeholder="Address 2" size="small" {...register('address_2')} />
                            </div>
                            <div className="col-span-1">
                                <Typography variant="body2">Country</Typography>
                                <TextFiled
                                    placeholder="Country"
                                    size="small"
                                    {...register('country')}
                                    error={Boolean(errors?.country)}
                                    errorText={Boolean(errors.country) && errors.country.message}
                                />
                            </div>
                            <div className="col-span-1">
                                <Typography variant="body2">State</Typography>
                                <TextFiled
                                    placeholder="State"
                                    size="small"
                                    {...register('state')}
                                    error={Boolean(errors?.state)}
                                    errorText={Boolean(errors.state) && errors.state.message}
                                />
                            </div>
                            <div className="col-span-1">
                                <Typography variant="body2">City</Typography>
                                <TextFiled
                                    placeholder="City"
                                    size="small"
                                    {...register('city')}
                                    error={Boolean(errors?.city)}
                                    errorText={Boolean(errors.city) && errors.city.message}
                                />
                            </div>
                            <div className="col-span-1">
                                <Typography variant="body2">Postal Code</Typography>
                                <TextFiled
                                    placeholder="Postal Code"
                                    size="small"
                                    {...register('postal_code')}
                                    error={Boolean(errors?.postal_code)}
                                    errorText={Boolean(errors.postal_code) && errors.postal_code.message}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Lab User Details */}
                    <div className="border rounded-md flex flex-col gap-2 py-2">
                        <Typography className="px-2">Laboratory User</Typography>
                        <hr />
                        <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="col-span-1">
                                <Typography variant="body2">First Name</Typography>
                                <TextFiled
                                    placeholder="First Name"
                                    size="small"
                                    {...register('first_name')}
                                    error={Boolean(errors?.first_name)}
                                    errorText={Boolean(errors.first_name) && errors.first_name.message}
                                />
                            </div>
                            <div className="col-span-1">
                                <Typography variant="body2">Last Name</Typography>
                                <TextFiled
                                    placeholder="Last Name"
                                    size="small"
                                    {...register('last_name')}
                                    error={Boolean(errors?.last_name)}
                                    errorText={Boolean(errors.last_name) && errors.last_name.message}
                                />
                            </div>
                            <div className="col-span-1">
                                <Typography variant="body2">Email</Typography>
                                <TextFiled
                                    placeholder="Email"
                                    size="small"
                                    {...register('user_email')}
                                    error={Boolean(errors?.user_email)}
                                    errorText={Boolean(errors.user_email) && errors.user_email.message}
                                />
                            </div>
                            <div className="col-span-1">
                                <Typography variant="body2">Phone Number</Typography>
                                <TextFiled
                                    placeholder="Phone Number"
                                    size="small"
                                    {...register('user_phone')}
                                    error={Boolean(errors?.user_phone)}
                                    errorText={Boolean(errors.user_phone) && errors.user_phone.message}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="inline-flex gap-2 justify-end">
                        <button className="px-3 py-1.5 border border-gray-500 text-gray-600 rounded-md">Back</button>
                        <button
                            type="submit"
                            className="px-3 py-1.5 text-white rounded-md bg-teal-700 focus:bg-teal-900 outline-none"
                        >
                            Save & Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddLab;
