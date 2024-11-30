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
                        placeholder="First Name"
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
                        placeholder="Last Name"
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
                        placeholder="Email"
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
                        placeholder="Password"
                        {...field}
                        error={Boolean(errors.password)}
                        errorText={Boolean(errors.password) && errors.password.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="contact_number"
                defaultValue=""
                render={({ field }) => (
                    <TextFiled
                        className="col-span-1 md:col-span-2"
                        type="text"
                        placeholder="Contact Number"
                        {...field}
                        error={Boolean(errors.contact_number)}
                        errorText={Boolean(errors.contact_number) && errors.contact_number.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="hospital"
                defaultValue=""
                render={({ field }) => (
                    <TextFiled
                        className="col-span-1 md:col-span-2"
                        type="text"
                        placeholder="Hospital Name"
                        {...field}
                        error={Boolean(errors.hospital)}
                        errorText={Boolean(errors.hospital) && errors.hospital.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="address"
                defaultValue=""
                render={({ field }) => (
                    <TextFiled
                        className="col-span-1 md:col-span-2"
                        type="text"
                        placeholder="Address"
                        {...field}
                        error={Boolean(errors.address)}
                        errorText={Boolean(errors.address) && errors.address.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="zip_code"
                defaultValue=""
                render={({ field }) => (
                    <TextFiled
                        className="col-span-1 md:col-span-2"
                        type="text"
                        placeholder="Zip Code"
                        {...field}
                        error={Boolean(errors.zip_code)}
                        errorText={Boolean(errors.zip_code) && errors.zip_code.message}
                    />
                )}
            />
        </div>
    );
};

export default UserForm;
