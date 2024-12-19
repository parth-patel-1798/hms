import React from 'react';
import { useForm } from 'react-hook-form';
import Typography from '@components/Typography';
import TextField from '@components/TextField';

const PatientFilter = ({ onClose, filterValue }) => {
    const { register, handleSubmit } = useForm({
        default: {},
    });

    return (
        <form method="post" onSubmit={handleSubmit((data) => console.log(data))} className="grid gap-2">
            <div className="">
                <Typography variant="body2">First Name</Typography>
                <TextField placeholder="First Name" size="small" {...register('first_name')} />
            </div>

            <div className="inline-flex gap-2 justify-end">
                <button
                    type="reset"
                    className="px-3 py-1.5 border border-gray-500 text-gray-600 rounded-md"
                    onClick={() => {
                        if (onClose) onClose();
                    }}
                >
                    Reset
                </button>
                <button
                    type="submit"
                    className="px-3 py-1.5 text-white rounded-md bg-teal-700 focus:bg-teal-900 outline-none"
                >
                    Filter
                </button>
            </div>
        </form>
    );
};

export default PatientFilter;
