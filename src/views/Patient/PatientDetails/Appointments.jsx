import React from 'react';

const Appointments = () => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="border p-2 rounded-md">
                <div>
                    <p className="text-sm font-medium flex gap-2 items-center justify-between">
                        <div className="inline-flex gap-2 items-center">
                            <span>Extreme Headache</span>
                            <span className="text-xs text-gray-400 font-medium">10 Feb, 2025</span>
                        </div>
                        <span className="border border-emerald-500 rounded-full px-2 py-1 text-xs text-emerald-500 font-medium">
                            Upcoming
                        </span>
                    </p>
                    <small className="text-xs text-gray-600 font-medium">Dr Ritesh Patel</small>
                </div>
            </div>
            {Array.from({ length: 10 }).map((_, idx) => (
                <div key={idx} className="border p-2 rounded-md">
                    <div>
                        <p className="text-sm font-medium flex gap-2 items-center justify-between">
                            <div className="inline-flex gap-2 items-center">
                                <span>Food Poising</span>
                                <span className="text-xs text-gray-400 font-medium">23 Jan, 2025</span>
                            </div>
                        </p>
                        <small className="text-xs text-gray-600 font-medium">Dr Ritesh Patel</small>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Appointments;
