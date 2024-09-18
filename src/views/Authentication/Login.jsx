import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import TextFiled from '@components/TextFiled';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';

import { LoginAPI } from '@apis/Authentication';
import Button from '@components/Button';

const schema = yup.object().shape({
    email: yup.string().email().required('First name is required.'),
    password: yup.string().required('First name is required.'),
});

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    // const mutation = useMutation({ mutationFn: (data) => LoginAPI(data) });
    const { mutate, isPending, isError, error } = useMutation({ mutationFn: (data) => LoginAPI(data) });

    const onSubmit = (data) => {
        mutate(data);
    };

    return (
        <div className="grid grid-cols-1 gap-4">
            <label className="text-center">
                <p className="font-semibold">Welcome Back</p>
                <small>Sign-in with credentials</small>
            </label>

            <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <TextFiled
                        type="email"
                        placeholder="Enter Email"
                        {...register('email')}
                        error={Boolean(errors?.email)}
                    />
                </div>
                <div className="">
                    <TextFiled
                        type="password"
                        placeholder="Enter Password"
                        {...register('password')}
                        error={Boolean(errors?.password)}
                    />
                </div>

                <NavLink to={'/auth/forgot-password'} className="text-sm text-end text-indigo-800">
                    Forgot Password ?
                </NavLink>
                <Button type="submit" className="p-2 bg-sky-800 rounded-lg text-white" disabled={isPending}>
                    Sign In
                </Button>
            </form>

            <span className="text-sm text-center">
                You don't have account ? <NavLink className="text-indigo-800">Sign Up</NavLink>
            </span>
        </div>
    );
};

export default Login;
