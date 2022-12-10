import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../Context/AuthContext/AuthContext';

const ForgetPassword = () => {
    // auth context
    const {forgetpassword}=useContext(AuthProvider)
        // form control
        const { register, handleSubmit,watch, formState: { errors }, } = useForm();

        // handaler 
        const handleLogin=(data)=>{
            console.log(data.email);
            forgetpassword(data.email)
            .then(() => {
            //    toast.success('Please Check your email inbox')
              })
              .catch((error) => {
                // const errorMessage = error.message;
                // ..
              });

        }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96'>
                <h2 className='text-4xl'>Forget Password</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <p>{watch('email')}</p>
                    <div className="form-control w-full ]">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email",{required: "Email Address is required"})} className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                 


                    <input className='btn w-full mt-3' value='Submit' type="submit" />
                </form>
           
            </div>
            <Toaster />
        </div>
    );
};

export default ForgetPassword;