import React from 'react'
import { Button } from '../../../components/utilities'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div>
      {/* Header section */}
      <div className="bg-coral h-[229px] flex justify-center items-center">
        <h2 className="text-[28px] text-white text-center">
        Forgot <br /> Password
        </h2>
      </div>

      {/* Forgot-Password Form */}
      <form>
        <div className="form-card h-[248px] w-[330px] mx-auto mt-[-52px] p-[30px] bg-white rounded-[40px] shadow-[0px_20px_40px_0px_rgba(230,139,138,0.06)] backdrop-blur-[25px]">
          <h3 className="text-[20px] mb-[20px]">
            Enter your email to receive a password reset link.
          </h3>

          {/* Email Input */}
          <div className="form-group flex flex-col">
            <label className="text-[16px] text-black">
              Email Address<span className="text-red">*</span>
            </label>
            <input
              type="text"
              className="h-[48px] border border-gray-light rounded-[5px] outline-none"

            />


          </div>
        </div>

        {/* Submit Button and Register Link */}
        <div className="form-btn flex flex-col items-center justify-center mt-[-28px] relative">
          {/* Button does not submit form here - it's just styled */}
          <Button children="Send Mail" btnStyle="submit" />

          {/* Link to registration page */}
          <span className="text-black text-[16px] pt-[30px]">
            Back To{" "}
            <Link to="/auth/login" className="underline">
              Sign In
            </Link>
          </span>
        </div>
      </form>

    </div>
  )
}

export { ForgotPassword }
