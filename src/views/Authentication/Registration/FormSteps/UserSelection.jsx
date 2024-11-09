import React from 'react';
import { Controller } from 'react-hook-form';

const UserSelection = ({ control, errors }) => {
    return (
        <>
            {/* Hobby Radio Button */}
            <Controller
                control={control}
                name="user_type"
                render={({ field }) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <label
                            htmlFor="plan-doctor"
                            className="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer"
                        >
                            <span className="font-semibold text-gray-500 leading-tight uppercase text-center">
                                Doctor
                            </span>
                            <input
                                type="radio"
                                id="plan-doctor"
                                {...field}
                                value="doctor"
                                className="absolute h-0 w-0 appearance-none"
                            />
                            <span
                                aria-hidden="true"
                                className={`absolute inset-0 border-2 rounded-lg 
                                        ${field.value === 'doctor' ? 'border-teal-500 bg-teal-200 bg-opacity-10' : 'border-transparent'}`}
                            ></span>
                        </label>
                        <label
                            htmlFor="plan-laboratory"
                            className="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer"
                        >
                            <span className="font-semibold text-gray-500 leading-tight uppercase text-center">
                                Laboratory
                            </span>

                            <input
                                type="radio"
                                id="plan-laboratory"
                                {...field}
                                value="laboratory"
                                className="absolute h-0 w-0 appearance-none"
                            />
                            <span
                                aria-hidden="true"
                                className={`absolute inset-0 border-2 rounded-lg 
                                        ${field.value === 'laboratory' ? 'border-teal-500 bg-teal-200 bg-opacity-10' : 'border-transparent'}`}
                            ></span>
                        </label>
                    </div>
                )}
            />

            {/* Display errors */}
            {errors?.user_type && <p className="text-red-500">{errors.user_type.message}</p>}
        </>
    );
};

export default UserSelection;
