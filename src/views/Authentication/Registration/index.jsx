import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import UserSelection from './FormSteps/UserSelection';
import Button from '@components/Button';
import UserForm from './FormSteps/UserForm';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ReportListAPI } from '@apis/Reports';

const validationSchemas = [
    Yup.object().shape({ user_type: Yup.string().required('Please select any one user type.') }),
    Yup.object().shape({
        first_name: Yup.string().required('First name is required.'),
        last_name: Yup.string().required('Last name is required.'),
        email: Yup.string().email('Please enter valid email address.').required('Email is required.'),
        country: Yup.string().required('Country is required.'),
        state: Yup.string().required('State is required.'),
        city: Yup.string().required('City is required.'),
        zip_code: Yup.string().required('Zip code is required.'),
    }),
];

const Registration = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const { control, handleSubmit, formState, trigger } = useForm({
        resolver: yupResolver(validationSchemas[currentStep]),
    });

    const { data: reports } = useQuery({ queryKey: ['reports'], queryFn: ReportListAPI });
    const steps = [
        { title: 'User Selection', element: <UserSelection control={control} errors={formState.errors} /> },
        {
            title: 'Registration Form',
            element: <UserForm control={control} errors={formState.errors} reports={reports} />,
        },
    ];

    const onSubmit = (data) => {
        console.log(data);
    };

    // Pagination
    const nextStep = async (e) => {
        const isValid = await trigger();
        if (isValid) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const lastStep = steps.length - 1;

    return (
        <form className="flex flex-col gap-10">
            {/* <p className="text-center">Registration</p> */}
            <div className="grid gap-5">
                <p className="text-center">{steps[currentStep].title}</p>
                <div>{steps[currentStep].element}</div>
            </div>
            <div className="flex justify-between">
                <Button
                    id="PreviousBTN"
                    type="submit"
                    className="p-2 bg-slate-700 hover:bg-slat-900 rounded-lg text-white"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                >
                    Previous
                </Button>

                {currentStep === lastStep ? (
                    <Button
                        id="SubmitBTN"
                        type="button"
                        className="p-2 bg-teal-700 hover:bg-teal-900 rounded-lg text-white"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Submit
                    </Button>
                ) : (
                    <Button
                        id="NextBTN"
                        type="button"
                        className="p-2 bg-teal-700 hover:bg-teal-900 rounded-lg text-white"
                        onClick={nextStep}
                    >
                        Next
                    </Button>
                )}
            </div>
            <span className="text-sm text-center">
                Already have account ?{' '}
                <NavLink to={'/auth/login'} className="text-indigo-800">
                    Sign In
                </NavLink>
            </span>
        </form>
    );
};

export default Registration;
