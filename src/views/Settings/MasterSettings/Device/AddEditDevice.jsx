import { VendorListAPI } from '@apis/Vendor,';
import Typography from '@components/Typography';
import TextField from '@components/TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';

import * as Yup from 'yup';
import Button from '@components/Button';
import Select from '@components/Select';
const schema = Yup.object().shape({
    name: Yup.string().required('Hospital name is required.'),
});

const AddEditDevice = ({ formValue, onClose }) => {
    const { data, isLoading, refetch } = useQuery({ queryKey: ['devicesVendorList'], queryFn: VendorListAPI });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            id: formValue?.uuid || null,
            name: formValue?.name || '',
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <form className="flex flex-col gap-5 md:min-w-96" onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="px-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="sm:col-span-2">
                    <Typography variant="body2" className="ml-1">
                        Name
                    </Typography>
                    <TextField
                        size="small"
                        placeholder="Name"
                        {...register('name')}
                        name="name"
                        error={Boolean(errors?.name)}
                        errorText={Boolean(errors.name) && errors.name.message}
                    />
                </div>
                <div className="sm:col-span-2">
                    <Typography variant="body2" className="ml-1">
                        API Key
                    </Typography>
                    <TextField
                        size="small"
                        placeholder="API Key"
                        {...register('api_key')}
                        error={Boolean(errors?.api_key)}
                        errorText={Boolean(errors.api_key) && errors.api_key.message}
                    />
                </div>
                <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="">
                        <Typography variant="body2" className="ml-1">
                            Vendor
                        </Typography>
                        <Select
                            {...register('device_vendor_id')}
                            size="small"
                            name="device_vendor_id"
                            error={Boolean(errors?.device_vendor_id)}
                            errorText={Boolean(errors.device_vendor_id) && errors.device_vendor_id.message}
                        >
                            <option value="">Select Vendor</option>
                            {data?.data.map((item, idx) => (
                                <option key={idx} value={item.uuid}>
                                    {item.name}
                                </option>
                            ))}
                        </Select>
                    </div>
                    <div className="">
                        <Typography variant="body2" className="ml-1">
                            Device Type
                        </Typography>
                        <TextField
                            size="small"
                            placeholder="Device Type"
                            {...register('device_type')}
                            error={Boolean(errors?.device_type)}
                            errorText={Boolean(errors.device_type) && errors.device_type.message}
                        />
                    </div>

                    <div className="">
                        <Typography variant="body2" className="ml-1">
                            Device Sim
                        </Typography>
                        <Select
                            {...register('device_sim')}
                            size="small"
                            name="device_sim"
                            error={Boolean(errors?.device_sim)}
                            errorText={Boolean(errors.device_sim) && errors.device_sim.message}
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Select>
                    </div>
                    <div className="">
                        <Typography variant="body2" className="ml-1">
                            Device Model
                        </Typography>
                        <TextField
                            size="small"
                            placeholder="Device Model"
                            {...register('device_model')}
                            error={Boolean(errors?.device_model)}
                            errorText={Boolean(errors.device_model) && errors.device_model.message}
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <Typography variant="body2" className="ml-1">
                        Secret Key
                    </Typography>
                    <TextField
                        size="small"
                        placeholder="Secret Key"
                        {...register('secret_key')}
                        error={Boolean(errors?.secret_key)}
                        errorText={Boolean(errors.secret_key) && errors.secret_key.message}
                    />
                </div>
                <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="">
                        <Typography variant="body2" className="ml-1">
                            RF ID
                        </Typography>
                        <Select
                            {...register('rfid')}
                            size="small"
                            name="rfid"
                            error={Boolean(errors?.rfid)}
                            errorText={Boolean(errors.rfid) && errors.rfid.message}
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Select>
                    </div>
                    <div className="">
                        <Typography variant="body2" className="ml-1">
                            Status
                        </Typography>
                        <Select
                            {...register('status')}
                            size="small"
                            name="status"
                            error={Boolean(errors?.status)}
                            errorText={Boolean(errors.status) && errors.status.message}
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </Select>
                    </div>
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
                    // disabled={isPending}
                >
                    Save
                </Button>
            </div>
        </form>
    );
};

export default AddEditDevice;
