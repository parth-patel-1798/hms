import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import TextFiled from '@components/TextField';
import MultiSelect from '@components/MultiSelect';
import Select from '@components/Select';
import { City, Country, State } from 'country-state-city';

const UserForm = ({ control, errors, reports }) => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');

    const countries = Country.getAllCountries();
    const states = selectedCountry ? State.getStatesOfCountry(selectedCountry) : [];
    const cities = selectedState ? City.getCitiesOfState(selectedCountry, selectedState) : [];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* First Name Field */}
            <div>
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
            </div>

            {/* Last Name Field */}
            <div>
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
            </div>

            {/* Email Field */}
            <div className="col-span-1 md:col-span-2">
                <Controller
                    control={control}
                    name="email"
                    defaultValue=""
                    render={({ field }) => (
                        <TextFiled
                            type="email"
                            placeholder="Email"
                            {...field}
                            error={Boolean(errors.email)}
                            errorText={Boolean(errors.email) && errors.email.message}
                        />
                    )}
                />
            </div>

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

            <div className="col-span-1 md:col-span-2">
                <Controller
                    control={control}
                    name="contact_number"
                    defaultValue=""
                    render={({ field }) => (
                        <TextFiled
                            type="text"
                            placeholder="Contact Number"
                            {...field}
                            error={Boolean(errors.contact_number)}
                            errorText={Boolean(errors.contact_number) && errors.contact_number.message}
                        />
                    )}
                />
            </div>

            <div className="col-span-1 md:col-span-2">
                <Controller
                    control={control}
                    name="hospital"
                    defaultValue=""
                    render={({ field }) => (
                        <TextFiled
                            type="text"
                            placeholder="Hospital Name"
                            {...field}
                            error={Boolean(errors.hospital)}
                            errorText={Boolean(errors.hospital) && errors.hospital.message}
                        />
                    )}
                />
            </div>

            <div className="col-span-1 md:col-span-2">
                <Controller
                    control={control}
                    name="address_1"
                    defaultValue=""
                    render={({ field }) => (
                        <TextFiled
                            type="text"
                            placeholder="Address 1"
                            {...field}
                            error={Boolean(errors.address)}
                            errorText={Boolean(errors.address) && errors.address.message}
                        />
                    )}
                />
            </div>
            <div className="col-span-1 md:col-span-2">
                <Controller
                    control={control}
                    name="address_2"
                    defaultValue=""
                    render={({ field }) => (
                        <TextFiled
                            type="text"
                            placeholder="Address 2"
                            {...field}
                            error={Boolean(errors.address)}
                            errorText={Boolean(errors.address) && errors.address.message}
                        />
                    )}
                />
            </div>

            {/* Country */}
            <div>
                <Controller
                    control={control}
                    name="country"
                    defaultValue=""
                    render={({ field }) => (
                        <Select
                            {...field}
                            onChange={(e) => {
                                field.onChange(e.target.value);
                                setSelectedCountry(e.target.value);
                                setSelectedState(''); // Reset state selection
                            }}
                            error={Boolean(errors.country)}
                            errorText={Boolean(errors.country) && errors.country.message}
                        >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                                <option value={country.isoCode} key={country.isoCode}>
                                    {country.name}
                                </option>
                            ))}
                        </Select>
                    )}
                />
            </div>
            <div>
                <Controller
                    control={control}
                    name="state"
                    defaultValue=""
                    render={({ field }) => (
                        <Select
                            {...field}
                            onChange={(e) => {
                                field.onChange(e.target.value);
                                setSelectedState(e.target.value);
                            }}
                            error={Boolean(errors.state)}
                            errorText={Boolean(errors.state) && errors.state.message}
                            disabled={!selectedCountry} // Disable until country is selected
                        >
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option value={state.isoCode} key={state.isoCode}>
                                    {state.name}
                                </option>
                            ))}
                        </Select>
                    )}
                />
            </div>

            <div>
                <Controller
                    control={control}
                    name="city"
                    defaultValue=""
                    render={({ field }) => (
                        <Select
                            {...field}
                            error={Boolean(errors.city)}
                            errorText={Boolean(errors.city) && errors.city.message}
                            disabled={!selectedState} // Disable until state is selected
                        >
                            <option value="">Select City</option>
                            {cities.map((city) => (
                                <option value={city.name} key={city.name}>
                                    {city.name}
                                </option>
                            ))}
                        </Select>
                    )}
                />
            </div>

            <div>
                <Controller
                    control={control}
                    name="zip_code"
                    defaultValue=""
                    render={({ field }) => (
                        <TextFiled
                            type="text"
                            placeholder="Zip Code"
                            {...field}
                            error={Boolean(errors.zip_code)}
                            errorText={Boolean(errors.zip_code) && errors.zip_code.message}
                        />
                    )}
                />
            </div>

            <div className="col-span-1 md:col-span-2">
                <Controller
                    control={control}
                    name="devices"
                    defaultValue=""
                    onChange={(e) => console.log(e)}
                    render={({ field }) => (
                        <MultiSelect
                            value={field.value}
                            onChange={(selectedValues) => {
                                field.onChange(selectedValues); // Update React Hook Form
                                console.log('Selected Devices:', selectedValues); // Log selected values
                            }}
                            // error={true}
                            // errorText={'files Required'}
                        >
                            {reports?.data.map((report) => (
                                <div
                                    className="hover:bg-gray-100 px-2 py-1 rounded-md"
                                    value={report.uuid}
                                    key={report.uuid}
                                >
                                    {report.name}
                                </div>
                            ))}
                        </MultiSelect>
                    )}
                />
            </div>
        </div>
    );
};

export default UserForm;
