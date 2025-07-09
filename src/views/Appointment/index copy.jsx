import React from 'react';

const Appointment = () => {
    return (
        <div className="flex flex-col gap-2 h-full overflow-hidden">
            {/* Breadcrumb */}
            <div className="px-2">
                <label className="flex items-center gap-2">
                    <span className="font-semibold">Appointments</span>
                </label>
                <small className="text-xs font-normal text-gray-500">{`Dashboard > Appointment`}</small>
            </div>

            <div className="flex-1 flex flex-col gap-2 ">
                <p className="sticky top-0 left-0 right-0 bg-slate-100 px-2 py-1 w-full flex">Test Array</p>

                <div className="flex-1 flex gap-2 px-2 overflow-auto">
                    <div className="bg-gray-100 min-w-72 flex-1 flex flex-col gap-2">
                        <p className="bg-gray-300 px-2 py-1 rounded-md sticky top-0">Appointment</p>
                        <div className="flex flex-col gap-2">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div key={index} className="h-20 border-2 rounded-md"></div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-100 min-w-72 flex-1 flex flex-col gap-2">
                        <p className="bg-gray-300 px-2 py-1 rounded-md sticky top-0">Doctor</p>
                        <div className="flex flex-col gap-2">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div key={index} className="h-20 border-2 rounded-md"></div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-100 min-w-72 flex-1 flex flex-col gap-2">
                        <p className="bg-gray-300 px-2 py-1 rounded-md sticky top-0">Test</p>
                        <div className="flex flex-col gap-2">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div key={index} className="h-20 border-2 rounded-md"></div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-100 min-w-72 flex-1 flex flex-col gap-2">
                        <p className="bg-gray-300 px-2 py-1 rounded-md sticky top-0">Test</p>
                        <div className="flex flex-col gap-2">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div key={index} className="h-20 border-2 rounded-md"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
