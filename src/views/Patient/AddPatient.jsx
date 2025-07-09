import React from 'react';
import TextFiled from '@components/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Typography from '@components/Typography';
import Select from '@components/Select';
import { useQuery } from '@tanstack/react-query';
import { PatientDetailsByIdAPI } from '@apis/Patient';
import { useParams } from 'react-router-dom';
import { set } from 'date-fns';
import { City, Country, State } from 'country-state-city';

const schema = yup.object().shape({
    first_name: yup.string().required('First name is required.'),
    last_name: yup.string().required('Last name is required.'),
    ssn_number: yup.string().required('SSN number is required.'),
    dob: yup.string().required('Date of birth is required.'),
    marital_status: yup.string().required('Marital status is required.'),
    primary_phone: yup.string().required('Primary phone number is required.'),
    // secondary_phone: yup.string().required('Secondary phone number is required.'),
    // home_phone: yup.string().required('Home phone number is required.'),
    // work_phone: yup.string().required('Work phone number is required.'),
    email: yup.string().required('Email address is required.'),
    language: yup.string().required('Language is required.'),
});

const AddPatient = () => {
    const { id: patientId } = useParams();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const { data, isLoading } = useQuery({
        queryKey: ['patient_edit', patientId],
        queryFn: () => PatientDetailsByIdAPI(patientId),
        enabled: !!patientId,
        retry: false,
    });

    const countries = Country.getAllCountries();

    React.useEffect(() => {
        if (data) {
            const patientData = data.data;
            setValue('first_name', patientData.user.first_name);
            setValue('last_name', patientData.user.last_name);
            setValue('middle_name', patientData.user.middle_name);
            setValue('gender', patientData.gender);
            setValue('dob', patientData.dob);
            setValue('ssn_number', patientData.arn_number);
            setValue('marital_status', patientData.marital_status);
            setValue('primary_phone', patientData.primary_phone);
            setValue('secondary_phone', patientData.secondary_phone);
            setValue('home_phone', patientData.home_phone);
            setValue('work_phone', patientData.work_phone);
            setValue('email', patientData.user.email);
            setValue('work_phone', patientData.work_phone);
        }
    }, [data]);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col gap-2">
            {/* Breadcrumb */}
            <div>
                <label className="flex items-center gap-2">
                    <span className="font-semibold">{`${patientId ? 'Edit' : 'Create'}`} Patient</span>
                </label>
                <small className="text-xs font-normal text-gray-500">{`Dashboard > Patients > ${patientId ? 'Edit' : 'Create'} Patient`}</small>
            </div>

            <div className="bg-white w-full p-3 rounded-md">
                <div className="pb-3 pt-2">
                    <Typography className="font-medium">{`${patientId ? 'Edit' : 'Create'}`} Patient</Typography>
                </div>
                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <div className="border rounded-md flex flex-col gap-2 py-2">
                        <Typography className="px-2">Patient Details</Typography>
                        <hr />
                        <div className="px-2 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-2">
                            <div className="col-span-1 md:col-span-6 lg:col-span-4">
                                <Typography variant="body2">First Name</Typography>
                                <TextFiled
                                    placeholder="First Name"
                                    size="small"
                                    {...register('first_name')}
                                    error={Boolean(errors?.first_name)}
                                    errorText={Boolean(errors.first_name) && errors.first_name.message}
                                />
                            </div>
                            <div className="col-span-1 md:col-span-6 lg:col-span-4">
                                <Typography variant="body2">Last Name</Typography>
                                <TextFiled
                                    placeholder="Last Name"
                                    size="small"
                                    {...register('last_name')}
                                    error={Boolean(errors?.last_name)}
                                    errorText={Boolean(errors.last_name) && errors.last_name.message}
                                />
                            </div>
                            <div className="col-span-1 md:col-span-6 lg:col-span-4">
                                <Typography variant="body2">Middle Name</Typography>
                                <TextFiled
                                    placeholder="Middle Name"
                                    size="small"
                                    {...register('middle_name')}
                                    error={Boolean(errors?.middle_name)}
                                    errorText={Boolean(errors.middle_name) && errors.middle_name.message}
                                />
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">Gender</Typography>
                                <Select
                                    size="small"
                                    {...register('gender')}
                                    defaultValue="Male"
                                    error={Boolean(errors?.gender)}
                                    errorText={Boolean(errors.gender) && errors.gender.message}
                                >
                                    <option className="text-sm">Male</option>
                                    <option className="text-sm">Female</option>
                                    <option className="text-sm">Other</option>
                                </Select>
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">SSN Number</Typography>
                                <TextFiled
                                    size="small"
                                    placeholder="SSN Number"
                                    {...register('ssn_number')}
                                    error={Boolean(errors?.ssn_number)}
                                    errorText={Boolean(errors.ssn_number) && errors.ssn_number.message}
                                />
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">Date Of Birth</Typography>
                                <TextFiled
                                    type="date"
                                    placeholder="Date Of Birth"
                                    size="small"
                                    {...register('dob')}
                                    error={Boolean(errors?.dob)}
                                    errorText={Boolean(errors.dob) && errors.dob.message}
                                />
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">Marital Status</Typography>
                                <Select
                                    size="small"
                                    {...register('marital_status')}
                                    defaultValue="Single"
                                    error={Boolean(errors?.marital_status)}
                                    errorText={errors.marital_status?.message}
                                >
                                    <option value="Single" className="text-sm">
                                        Single
                                    </option>
                                    <option value="Married" className="text-sm">
                                        Married
                                    </option>
                                    <option value="Divorced" className="text-sm">
                                        Divorced
                                    </option>
                                    <option value="Widowed" className="text-sm">
                                        Widowed
                                    </option>
                                    <option value="Separated" className="text-sm">
                                        Separated
                                    </option>
                                    <option value="Partnered" className="text-sm">
                                        Domestic Partnership
                                    </option>
                                    <option value="Unknown" className="text-sm">
                                        Prefer not to say
                                    </option>
                                </Select>
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">Primary Phone Number</Typography>
                                <TextFiled
                                    size="small"
                                    placeholder="Primary Phone Number"
                                    {...register('primary_phone')}
                                />
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">Secondary Phone Number</Typography>
                                <TextFiled
                                    size="small"
                                    placeholder="Secondary Phone Number"
                                    {...register('secondary_phone')}
                                />
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">Home Phone Number</Typography>
                                <TextFiled size="small" placeholder="Home Phone Number" {...register('home_phone')} />
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">Work Phone Number</Typography>
                                <TextFiled size="small" placeholder="Work Phone Number" {...register('work_phone')} />
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <label className="text-sm truncate">Email Address</label>
                                <TextFiled size="small" placeholder="Email Address" {...register('email')} />
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <label className="text-sm truncate">Language</label>
                                {/* <TextFiled size="small" placeholder="Patient Email Address" {...register('language')} /> */}
                                <Select
                                    size="small"
                                    {...register('language')}
                                    defaultValue="Gujarati"
                                    error={Boolean(errors?.language)}
                                    errorText={Boolean(errors.language) && errors.language.message}
                                >
                                    <option value="English" className="text-sm">
                                        English
                                    </option>
                                    <option value="Hindi" className="text-sm">
                                        Hindi
                                    </option>
                                    <option value="Gujarati" className="text-sm">
                                        Gujarati
                                    </option>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Address Info */}
                    <div className="border rounded-md flex flex-col gap-2 py-2">
                        <Typography className="px-2">Patient Medical Info</Typography>
                        <hr />
                        <div className="px-2 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-2">
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">Medical Aid & Private</Typography>
                                <Select size="small" {...register('medical_private')} defaultValue="">
                                    <option className="text-sm">Medical Aid Patient</option>
                                    <option className="text-sm">Private Patient</option>
                                </Select>
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">MRN Number</Typography>
                                <TextFiled size="small" placeholder="MRN Number" {...register('mrn_number')} />
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <label className="text-sm truncate">Race</label>
                                <TextFiled size="small" placeholder="Race" {...register('race')} />
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <label className="text-sm truncate">Ethnicity</label>
                                <TextFiled size="small" placeholder="Ethnicity" {...register('ethnicity')} />
                            </div>
                        </div>
                    </div>

                    {/* Patient Details Medical Info */}
                    <div className="border rounded-md flex flex-col gap-2 py-2">
                        <Typography className="px-2">Address Info</Typography>
                        <hr />
                        <div className="px-2 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-2">
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">Address Line 1</Typography>
                                <TextFiled size="small" placeholder="Address Line 1" {...register('address_1')} />
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6">
                                <Typography variant="body2">Address Line 2</Typography>
                                <TextFiled size="small" placeholder="Address Line 2" {...register('address_2')} />
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6 flex flex-wrap gap-2 w-full">
                                <div className="flex-1">
                                    <label className="text-sm truncate">Country</label>
                                    <Select
                                        size="small"
                                        {...register('country')}
                                        defaultValue=""
                                        error={Boolean(errors?.country)}
                                        errorText={Boolean(errors.country) && errors.country.message}
                                    >
                                        <option value="" className="text-sm">
                                            Select Country
                                        </option>
                                        {countries.map((country) => (
                                            <option key={country.isoCode} value={country.isoCode} className="text-sm">
                                                {country.name}
                                            </option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="flex-1">
                                    <label className="text-sm truncate">State</label>
                                    <Select
                                        size="small"
                                        {...register('state')}
                                        defaultValue=""
                                        error={Boolean(errors?.state)}
                                        errorText={Boolean(errors.state) && errors.state.message}
                                    >
                                        <option value="" className="text-sm">
                                            Select State
                                        </option>
                                        {State.getStatesOfCountry(watch('country')).map((states) => (
                                            <option key={states.isoCode} value={states.isoCode} className="text-sm">
                                                {states.name}
                                            </option>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                            <div className="col-span-1 md:col-span-3 lg:col-span-6 flex flex-wrap gap-2 w-full">
                                <div className="flex-1">
                                    <label className="text-sm truncate">City</label>
                                    <Select
                                        size="small"
                                        {...register('city')}
                                        defaultValue=""
                                        error={Boolean(errors?.city)}
                                        errorText={Boolean(errors.city) && errors.city.message}
                                    >
                                        <option value="" className="text-sm">
                                            Select City
                                        </option>
                                        {console.log(City.getCitiesOfState(watch('country'), watch('state')))}
                                        {City.getCitiesOfState(watch('country'), watch('state')).map((city) => (
                                            <option key={city.name} value={city.name} className="text-sm">
                                                {city.name}
                                            </option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="flex-1">
                                    <label className="text-sm truncate">Zip Code</label>
                                    <TextFiled size="small" placeholder="Zip Code" {...register('zip_code')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="inline-flex gap-2 justify-end">
                        <button className="px-3 py-1.5 border border-gray-500 text-gray-600 rounded-md">Back</button>
                        <button
                            type="submit"
                            className="px-3 py-1.5 text-white rounded-md bg-teal-700 focus:bg-teal-900 outline-none"
                            disabled={isLoading}
                        >
                            Save & Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPatient;
