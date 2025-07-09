import React from 'react';
import Select from '@components/Select';
import TextField from '@components/TextField';
import Typography from '@components/Typography';
import { City, Country, State } from 'country-state-city';
import { useParams } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { ReportListAPI } from '@apis/Reports';
import { useMutation, useQuery } from '@tanstack/react-query';
import MultiSelect from '@components/MultiSelect';
import { HospitalListAPI } from '@apis/Hospital';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DoctorAddUpdateAPI, DoctorSpecializationListAPI } from '@apis/Doctor';

export const doctorSchema = yup.object().shape({
    hospital_id: yup.string().required('Hospital & Clinic is required.'),
    first_name: yup.string().required('First name is required.'),
    last_name: yup.string().required('Last name is required.'),
    email: yup.string().email('Invalid email address.').required('Email is required.'),
    mobile_no: yup
        .string()
        .required('Mobile number is required.')
        .matches(/^[0-9]{10,15}$/, 'Mobile number must be 10-15 digits.'),
    gender: yup.string().required('Gender is required.'),
    dob: yup.string().required('Date of birth is required.'),
    marital_status: yup.string().required('Marital status is required.'),
    address_line_1: yup.string().required('Address Line 1 is required.'),
    address_line_2: yup.string(),
    country: yup.string().required('Country is required.'),
    state: yup.string().required('State is required.'),
    city: yup.string().required('City is required.'),
    postal_code: yup.string().required('Zip code is required.'),
    specialization: yup
        .array()
        .min(1, 'At least one specialization is required.')
        .required('Specialization is required.'),
});

const AddEditDoctor = () => {
    const { id: doctorId } = useParams();
    const { data: reports } = useQuery({ queryKey: ['specializationList'], queryFn: DoctorSpecializationListAPI });
    const { data: hospitals } = useQuery({ queryKey: ['hospitalsForDoctor'], queryFn: HospitalListAPI });
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        watch,
        reset,
    } = useForm({
        resolver: yupResolver(doctorSchema),
        defaultValues: {
            id: doctorId || null,
            hospital_id: '',
            first_name: '',
            last_name: '',
            email: '',
            mobile_no: '',
            contact_phone: '',
            gender: '',
            dob: '',
            marital_status: '',
            address_line_1: '',
            address_line_2: '',
            country: '',
            state: '',
            city: '',
            postal_code: '',
            specialization: [],
        },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: (data) => DoctorAddUpdateAPI(data),
        onSuccess: (response) => {
            toast.success(response.message);
            reset();
        },
        onError: (error) => {
            const { response } = error;
            toast.error(response.data.message);
        },
    });

    const handleSubmitForm = (data) => {
        console.log(data);
        mutate(data);
    };
    return (
        <div className="flex flex-col gap-2">
            {/* Breadcrumb */}
            <div className="">
                <label className="flex items-center gap-2">
                    <span className="font-semibold">{`${doctorId ? 'Edit' : 'Create'}`} Doctor</span>
                </label>
                <small className="text-xs font-normal text-gray-500">{`Dashboard > Patients > ${doctorId ? 'Edit' : 'Create'} Doctor`}</small>
            </div>

            {/*  */}
            <div className="bg-white w-full p-3 rounded-md">
                <div className="pb-3 pt-2">
                    <Typography className="font-medium">{`${doctorId ? 'Edit' : 'Create'}`} Doctor</Typography>
                </div>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className="">
                        <Typography variant="body2">Hospital & Clinic</Typography>
                        <Select
                            size="small"
                            {...register('hospital_id')}
                            defaultValue=""
                            error={Boolean(errors?.hospital_id)}
                            errorText={errors.hospital_id?.message}
                        >
                            <option value="" className="text-sm">
                                Select Hospital & Clinic
                            </option>
                            {hospitals?.data.map((hospital) => (
                                <option key={hospital.uuid} value={hospital.uuid} className="text-sm">
                                    {hospital.name}
                                </option>
                            ))}
                        </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="">
                            <Typography variant="body2">First Name</Typography>
                            <TextField
                                placeholder="First Name"
                                size="small"
                                {...register('first_name')}
                                error={Boolean(errors?.first_name)}
                                errorText={errors.first_name?.message}
                            />
                        </div>
                        <div className="">
                            <Typography variant="body2">Last Name</Typography>
                            <TextField
                                placeholder="Last Name"
                                size="small"
                                {...register('last_name')}
                                error={Boolean(errors?.last_name)}
                                errorText={errors.last_name?.message}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="">
                            <Typography variant="body2">Email</Typography>
                            <TextField
                                type="email"
                                placeholder="Email"
                                size="small"
                                {...register('email')}
                                error={Boolean(errors?.email)}
                                errorText={errors.email?.message}
                            />
                        </div>
                        <div className="">
                            <Typography variant="body2">Mobile Number</Typography>
                            <TextField
                                placeholder="Mobile Number"
                                size="small"
                                {...register('mobile_no')}
                                error={Boolean(errors?.mobile_no)}
                                errorText={errors.mobile_no?.message}
                            />
                        </div>
                        <div className="">
                            <Typography variant="body2">Contact Number</Typography>
                            <TextField
                                placeholder="Contact Number"
                                size="small"
                                {...register('contact_phone')}
                                error={Boolean(errors?.contact_phone)}
                                errorText={errors.contact_phone?.message}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <div className="flex-1">
                            <Typography variant="body2">Gender</Typography>
                            <Select
                                size="small"
                                {...register('gender')}
                                defaultValue=""
                                error={Boolean(errors?.gender)}
                                errorText={errors.gender?.message}
                            >
                                <option value="" className="text-sm">
                                    Select Gender
                                </option>
                                <option value="Male" className="text-sm">
                                    Male
                                </option>
                                <option value="Female" className="text-sm">
                                    Female
                                </option>
                                <option value="Other" className="text-sm">
                                    Other
                                </option>
                            </Select>
                        </div>
                        <div className="flex-1">
                            <Typography variant="body2">Date Of Birth</Typography>
                            <TextField
                                type="date"
                                placeholder="Date Of Birth"
                                size="small"
                                {...register('dob')}
                                error={Boolean(errors?.dob)}
                                errorText={errors.dob?.message}
                            />
                        </div>
                        <div className="flex-1">
                            <Typography variant="body2" className="text-nowrap">
                                Marital Status
                            </Typography>
                            <Select
                                size="small"
                                {...register('marital_status')}
                                defaultValue=""
                                error={Boolean(errors?.marital_status)}
                                errorText={errors.marital_status?.message}
                            >
                                <option value="" className="text-sm">
                                    Select Marital Status
                                </option>
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
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap gap-2">
                            <div className="flex-1">
                                <Typography variant="body2">Address 1</Typography>
                                <TextField
                                    size="small"
                                    placeholder="Address Line 1"
                                    {...register('address_line_1')}
                                    error={Boolean(errors?.address_line_1)}
                                    errorText={errors.address_line_1?.message}
                                />
                            </div>
                            <div className="flex-1">
                                <Typography variant="body2">Address 2</Typography>
                                <TextField size="small" placeholder="Address Line 2" {...register('address_line_2')} />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <div className="flex-1">
                                <Typography variant="body2">Country</Typography>
                                <Select
                                    size="small"
                                    {...register('country')}
                                    defaultValue=""
                                    error={Boolean(errors?.country)}
                                    errorText={errors.country?.message}
                                >
                                    <option value="" className="text-sm">
                                        Select Country
                                    </option>
                                    {Country.getAllCountries().map((country) => (
                                        <option key={country.isoCode} value={country.isoCode} className="text-sm">
                                            {country.name}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                            <div className="flex-1">
                                <Typography variant="body2">State</Typography>
                                <Select
                                    size="small"
                                    {...register('state')}
                                    defaultValue=""
                                    error={Boolean(errors?.state)}
                                    errorText={errors.state?.message}
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
                            <div className="flex-1">
                                <Typography variant="body2">City</Typography>
                                <Select
                                    size="small"
                                    {...register('city')}
                                    defaultValue=""
                                    error={Boolean(errors?.city)}
                                    errorText={errors.city?.message}
                                >
                                    <option value="" className="text-sm">
                                        Select City
                                    </option>
                                    {City.getCitiesOfState(watch('country'), watch('state')).map((city) => (
                                        <option key={city.name} value={city.name} className="text-sm">
                                            {city.name}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                            <div className="flex-1">
                                <label className="text-sm truncate">Zip Code</label>
                                <TextField
                                    size="small"
                                    placeholder="Zip Code"
                                    {...register('postal_code')}
                                    error={Boolean(errors?.postal_code)}
                                    errorText={errors.postal_code?.message}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="specialization"
                            defaultValue={[]}
                            render={({ field }) => (
                                <MultiSelect
                                    size="small"
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={Boolean(errors?.specialization)}
                                    errorText={errors.specialization?.message}
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
                    <hr />
                    <div className="inline-flex gap-2 justify-end">
                        <button className="px-3 py-1.5 border border-gray-500 text-gray-600 rounded-md">Back</button>
                        <button
                            type="submit"
                            className="px-3 py-1.5 text-white rounded-md bg-teal-700 focus:bg-teal-900 outline-none"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEditDoctor;
