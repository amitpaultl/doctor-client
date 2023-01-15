import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';

const SingUp = () => {
    // context user
    const {emailSingup,updateUser}=useContext(AuthProvider)
    // error handling
    const [error, setError] = useState('')
    // form control
    const { register, handleSubmit, formState: { errors } } = useForm();
  
   const navigate = useNavigate()

    // email singUp
    const handleLogin = (data) => {
        setError(' ')
        emailSingup(data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const userInfo = {
                displayName:data.name
            }
            console.log(userInfo);
            console.log(user);
            updateUser(userInfo)
            .then(() => {
                toast.success('Successfully created!');
                crenateUser(data.name, data.email)
                console.log(user);
              }).catch((error) => {
                // An error occurred
                // ...
              });

          
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
            // ..
          });

    }

    const crenateUser = (name, email)=>{
        const user = {
            name : name,
            email : email
        }
        fetch('https://doctor-server-sigma.vercel.app/createUser',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(ress => ress.json())
        .then(data => {
            getUserToken(email)
            console.log(data);
        })
    }

    const getUserToken = email =>{
        fetch(`https://doctor-server-sigma.vercel.app/jwt?email=${email}`)
        .then(res => res.json())
        .then(data =>{
            if(data.accessToken){
                localStorage.setItem('accessToken' ,data.accessToken)
                navigate('/')
            }
        })
    }
    return (
        <div className=' flex justify-center items-center'>
            <div className='w-96'>
                <h2 className='text-4xl'>Sing up</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full ]">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" {...register("name")} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ]">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ]">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { minLength: { value: 6, message: 'password min length 6 ' }, required: "password Address is required" })} className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget password</span>
                        </label>
                    </div>
                    {error && <p className='text-red-600' role="alert">{error}</p>}

                    <input className='btn w-full' value='Submit' type="submit" />
                </form>
                <p>Have an account  <Link className='text-secondary' to='/login'>Login account</Link></p>
                <div className="flex flex-col w-full border-opacity-50">

                    <div className="divider">OR</div>

                </div>
                <button className='btn w-full'>Google Login</button>
            </div>
           
        </div>
    );
};

export default SingUp;