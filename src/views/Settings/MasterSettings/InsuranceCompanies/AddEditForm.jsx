import Select from '@components/Select';
import Typography from '@components/Typography';
import TextFiled from '@components/TextFiled';
import React from 'react';

const AddEditForm = () => {
    return (
        <form className="flex flex-col gap-5">
            <div className="px-2 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-2">
                <div className="col-span-1 md:col-span-3 lg:col-span-6">
                    <Typography variant="body2">Name</Typography>
                    <TextFiled size="small" placeholder="Name" />
                </div>
                <div className="col-span-1 md:col-span-3 lg:col-span-6">
                    <label className="text-sm truncate">Code</label>
                    <TextFiled size="small" placeholder="Code" />
                </div>

                <div className="col-span-1 md:col-span-6 lg:col-span-12">
                    <Typography variant="body2">Status</Typography>
                    <Select size="small" defaultValue="">
                        <option className="text-sm">Active</option>
                        <option className="text-sm">Inactive</option>
                    </Select>
                </div>
            </div>
            <div className="inline-flex gap-2 justify-end">
                <button className="px-3 py-1 border border-gray-500 text-gray-600 rounded-md">Close</button>
                <button
                    type="submit"
                    className="px-3 py-1 text-white rounded-md bg-teal-700 focus:bg-teal-900 outline-none"
                >
                    Save & Next
                </button>
            </div>
        </form>
    );
};

export default AddEditForm;
