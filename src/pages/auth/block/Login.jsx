import React, { useState } from 'react';
import { Button } from '../../../components/utilities';
import { Link } from 'react-router-dom';
import { loginschema } from '../../../core/schema/Login.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Set Zod schema
const schema = loginschema


/**
 * Login Component
 * A simple login form layout with email and password fields.
 */
const Login = () => {

    // Setup form with zod validation
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    // Form submit handler
    const onsubmit = (data) => {
        console.log(data);
    }


    return (
        <div>
            {/* Header section */}
            <div className="bg-coral h-[229px] flex justify-center items-center">
                <h2 className="text-[28px] text-white text-center">
                    Welcome Back! <br /> Let's Get Started
                </h2>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit(onsubmit)}>
                <div className="form-card w-[330px] mx-auto mt-[-52px] p-[30px] bg-white rounded-[40px] shadow-[0px_20px_40px_0px_rgba(230,139,138,0.06)] backdrop-blur-[25px]">
                    <h3 className="text-[20px] mb-[20px]">
                        Access Your Account and Explore More
                    </h3>

                    {/* Email Input */}
                    <div className="form-group flex flex-col">
                        <label className="text-[16px] text-black">
                            Email Address<span className="text-red">*</span>
                        </label>
                        <input
                            type="text"
                            className="h-[48px] border border-gray-light rounded-[5px] outline-none"
                            {...register("email")}
                        />
                        {errors.email && <p className="text-red text-sm">{errors.email.message}</p>}


                        {/* Password Input */}
                        <label className="text-[16px] text-black mt-[20px]">
                            Password<span className="text-red">*</span>
                        </label>
                        <input
                            type="password"
                            className="h-[48px] border border-gray-light rounded-[5px]outline-none"
                            {...register("password")}
                        />
                        {errors.password && <p className="text-red text-sm">{errors.password.message}</p>}

                    </div>

                    {/* Forgot Password Link */}
                    <span className="text-[16px] text-black/50 underline cursor-pointer">
                        Forgot Password?
                    </span>
                </div>

                {/* Submit Button and Register Link */}
                <div className="form-btn flex flex-col items-center justify-center mt-[-28px] relative">
                    {/* Button does not submit form here - it's just styled */}
                    <Button children="Sign in" btnStyle="submit" />

                    {/* Link to registration page */}
                    <span className="text-black text-[16px] pt-[30px]">
                        Not a member?{" "}
                        <Link to="/auth/ragister" className="underline">
                            Create an account
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export { Login };
