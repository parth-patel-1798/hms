import TextFiled from '@components/TextFiled';
import React from 'react';

const AddPatient = () => {
    return (
        <div className="flex flex-col gap-2">
            {/* Breadcrumb */}
            <div>
                <label className="flex items-center gap-2">
                    <span className="font-semibold">Create Patient</span>
                </label>
                <small className="text-xs font-normal text-gray-500">{`Dashboard > Patients > Create Patient`}</small>
            </div>

            {/* Form */}
            <div className="bg-white w-full p-3 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    <div>
                        <label className="text-sm">First Name</label>
                        <input
                            className="text-sm px-2 py-2 rounded-md border outline-none w-full"
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <label className="text-sm">Last Name</label>
                        <input
                            className="text-sm px-2 py-2 rounded-md border outline-none w-full"
                            placeholder="Last Name"
                        />
                    </div>
                    <div>
                        <label className="text-sm">Middle Name</label>
                        <input
                            className="text-sm px-2 py-2 rounded-md border outline-none w-full"
                            placeholder="Middle Name"
                        />
                    </div>
                    <div>
                        <label className="text-sm">Gender</label>
                        <select className="text-sm px-1 py-2 rounded-md border outline-none w-full appearance bg-white">
                            <option className="text-sm">Male</option>
                            <option className="text-sm">Female</option>
                            <option className="text-sm">Other</option>
                        </select>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label className="text-sm">Date Of Birth</label>
                        <input
                            className="text-sm px-2 py-2 rounded-md border outline-none w-full"
                            placeholder="Middle Name"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="text-sm">SSN Number</label>
                        <input
                            className="text-sm px-2 py-2 rounded-md border outline-none w-full"
                            placeholder="Middle Name"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="text-sm">MRN Number</label>
                        <input
                            className="text-sm px-2 py-2 rounded-md border outline-none w-full"
                            placeholder="Middle Name"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label className="text-sm truncate">Patient Primary Phone Number</label>
                        <input
                            className="text-sm px-2 py-2 rounded-md border outline-none w-full"
                            placeholder="Patient Primary Phone Number"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label className="text-sm truncate">Patient Secondary Phone Number</label>
                        <input
                            className="text-sm px-2 py-2 rounded-md border outline-none w-full"
                            placeholder="Patient Secondary Phone Number"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label className="text-sm truncate">Home Phone Number</label>
                        <input
                            className="text-sm px-2 py-2 rounded-md border outline-none w-full"
                            placeholder="Home Phone Number"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label className="text-sm truncate">Work Phone Number</label>
                        <input
                            className="text-sm px-2 py-2 rounded-md border outline-none w-full"
                            placeholder="Work Phone Number"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label className="text-sm truncate">Patient Email Address</label>
                        <input
                            className="text-sm px-2 py-2 rounded-md border outline-none w-full"
                            placeholder="Patient Email Address"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label className="text-sm truncate">Language</label>
                        <input
                            className="text-sm px-2 py-2 rounded-md border outline-none w-full"
                            placeholder="Patient Email Address"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label className="text-sm truncate">Race</label>
                        <input className="text-sm px-2 py-2 rounded-md border outline-none w-full" placeholder="Race" />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label className="text-sm truncate">Ethnicity</label>
                        <input
                            className="text-sm px-2 py-2 rounded-md border outline-none w-full"
                            placeholder="Ethnicity"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-4">
                        <label className="text-sm truncate">Marital Status</label>
                        <input
                            className="text-sm px-2 py-2 rounded-md border outline-none w-full"
                            placeholder="Ethnicity"
                        />
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-4 inline-flex gap-2 justify-end">
                        <button className="p-2 border border-gray-500 text-gray-600 rounded-md">Back</button>
                        <button className="px-4 py-2 text-white rounded-md bg-teal-700 focus:bg-teal-900 outline-none">
                            Save & Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPatient;
