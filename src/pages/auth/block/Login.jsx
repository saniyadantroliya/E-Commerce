import React from 'react'
import { Button } from '../../../components/utilities'

const Login = () => {
    return (
        <div>

            <div className='bg-coral h-[229px] flex justify-center items-center' >

                <h2 className='text-[28px] text-white'>Welcome Back! <br /> Let's Get Started</h2>

            </div>

            <form>

                <div className="form-card h-[350px] w-[330px] bg-white mx-auto mt-[-52px] p-[30px] rounded-[40px]  shadow-[0px_20px_40px_0px_rgba(230,139,138,0.06)] backdrop-blur-[25px]">

                    <h3 className='text-[20px] mb-[20px]'>Access Your Account and Explore More</h3>


                    <div className="form-group flex flex-col">

                        <label className='text-[16px] text-black'>
                            Email Address<span className='text-red'>*</span>
                        </label>

                        <input type="text" className=' h-[48px] border rounded-[5px] mb-[20px] border-gray-light  outline-none' />



                        <label className='text-[16px] text-black'>
                            Password<span className='text-red'>*</span>
                        </label>

                        <input type="password" className=' h-[48px] border rounded-[5px] mb-[20px] border-gray-light  outline-none' />

                    </div>

                    <span className=' text-[16px] text-black/50 underline'>Forgot Password?</span>

                </div>

            </form>

            <div className="form-btn flex flex-col items-center justify-center mt-[-28px] relative">

                <Button children="Sign in" btnStyle='button'></Button>

                <span className='text-black text-[16px] pt-[30px]'>Not a member? <b className='underline'>Create an account</b></span>

            </div>



        </div>
    )
}

export { Login }