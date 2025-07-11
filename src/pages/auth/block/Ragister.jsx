import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/utilities';
import { registerschema } from '../../../core/schema/Register.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

// Set Zod schema
const schema = registerschema;

const Ragister = () => {
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
    console.log("Form Data:", data);

    // Prepare data for API
    const bodyData = {
      user_agent: "EI-AAPP",
      name: data?.name,
      email: data?.email,
      mobile: data?.country_code + "-" + data?.phone,
      password: data?.password,
    };

    // Send POST request to register endpoint
    axios
      .post("https://emaadinfotech-demos.in/ecommerce-api/user_api/register", bodyData)
      .then((res) => {
        console.log("Response:", res);
      })
      .catch((err) => {
        console.error("Error:", err);
      });

    console.log("Body Data:", bodyData);
  };

  return (
    <div>
      {/* Header section */}
      <div className="bg-coral h-[229px] flex justify-center items-center">
        <h2 className="text-[28px] text-white text-center">
          Create your <br /> Account
        </h2>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="form-card w-[330px] mx-auto mt-[-52px] p-[30px] bg-white rounded-[40px] shadow-[0px_20px_40px_0px_rgba(230,139,138,0.06)] backdrop-blur-[25px]">

          <h3 className="text-[20px] mb-[20px]">
            Welcome back! Please enter your details
          </h3>

          {/* Name field */}
          <div className="form-group flex flex-col">
            <label className="text-[16px] text-black">
              Name<span className="text-red">*</span>
            </label>
            <input
              type="text"
              className="h-[48px] border border-gray-light rounded-[5px] outline-none"
              {...register("name")}
            />
            {errors.name && <p className="text-red text-sm">{errors.name.message}</p>}
          </div>

          {/* Email field */}
          <div className="form-group flex flex-col mt-[20px]">
            <label className="text-[16px] text-black">
              Email Address<span className="text-red">*</span>
            </label>
            <input
              type="text"
              className="h-[48px] border border-gray-light rounded-[5px] outline-none"
              {...register("email")}
            />
            {errors.email && <p className="text-red text-sm">{errors.email.message}</p>}
          </div>

          {/* Mobile number section */}
          <div className="form-group flex flex-col mt-[20px]">
            <label className="text-[16px] text-black">
              Mobile Number <span className="text-red">*</span>
            </label>
            <div className="flex gap-5">
              <select
                className="border border-gray-light rounded-[5px] outline-none pe-2"
                {...register("country_code")}
              >
                <option value="+91">+91</option>
                <option value="+92">+92</option>
                <option value="+93">+93</option>
              </select>
              <input
                type="text"
                className="h-[48px] w-full border border-gray-light rounded-[5px] outline-none"
                {...register("phone")}
              />
            </div>
            {(errors.country_code || errors.phone) && (
              <p className="text-red text-sm">Please enter a valid number</p>
            )}
          </div>

          {/* Password field */}
          <div className="form-group flex flex-col mt-[20px]">
            <label className="text-[16px] text-black">
              Password<span className="text-red">*</span>
            </label>
            <input
              type="password"
              className="h-[48px] border border-gray-light rounded-[5px] outline-none"
              {...register("password")}
            />
            {errors.password && <p className="text-red text-sm">{errors.password.message}</p>}
          </div>

          {/* Agreement checkbox */}
          <div className="form-group flex flex-col mb-[10px] mt-[10px]">
            <label>
              <input
                type="checkbox"
                className="me-2 text-[15px] text-black mt-[10px]"
                {...register("agree")}
              />
              I agree to all Term, Privacy and Fees
            </label>
            {errors.agree && <p className="text-red text-sm">{errors.agree.message}</p>}
          </div>
        </div>

        {/* Submit button and login link */}
        <div className="form-btn flex flex-col items-center justify-center mt-[-30px] relative">
          <Button children="Sign Up" btnStyle="submit" />
          <span className="text-black text-[16px] pt-[30px]">
            <Link to="/auth/login">Already have an account?____</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export { Ragister };
