import React from 'react';
import { Controller } from 'react-hook-form';
import TextFiled from '@components/TextFiled';

const UserForm = ({ control, errors }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* First Name Field */}
            <Controller
                control={control}
                name="first_name"
                defaultValue=""
                render={({ field }) => (
                    <TextFiled
                        type="text"
                        placeholder="Enter First Name"
                        {...field}
                        error={Boolean(errors.first_name)}
                        errorText={Boolean(errors.first_name) && errors.first_name.message}
                    />
                )}
            />

            {/* Last Name Field */}
            <Controller
                control={control}
                name="last_name"
                defaultValue=""
                render={({ field }) => (
                    <TextFiled
                        type="text"
                        placeholder="Enter Last Name"
                        {...field}
                        error={Boolean(errors.last_name)}
                        errorText={Boolean(errors.last_name) && errors.last_name.message}
                    />
                )}
            />

            {/* Email Field */}
            <Controller
                control={control}
                name="email"
                defaultValue=""
                render={({ field }) => (
                    <TextFiled
                        className="col-span-1 md:col-span-2"
                        type="email"
                        placeholder="Enter Email"
                        {...field}
                        error={Boolean(errors.email)}
                        errorText={Boolean(errors.email) && errors.email.message}
                    />
                )}
            />
            {/* Password Field */}
            <Controller
                control={control}
                name="password"
                defaultValue=""
                render={({ field }) => (
                    <TextFiled
                        className="col-span-1 md:col-span-2"
                        type="password"
                        placeholder="Enter Password"
                        {...field}
                        error={Boolean(errors.password)}
                        errorText={Boolean(errors.password) && errors.password.message}
                    />
                )}
            />
        </div>
    );
};

export default UserForm;
