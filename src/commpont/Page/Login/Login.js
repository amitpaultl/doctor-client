import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';
import useToken from '../../Hooks/UseHook';


const Login = () => {
    // use context
    const {emailLogin,googleLogin,user}=useContext(AuthProvider)
    // form control
    const { register, handleSubmit, formState: { errors }, } = useForm();
    // error show
    const [error, serError]=useState('')
    // locaton
    const location = useLocation()
    const navigate = useNavigate()
    const [loginUserEmail, setloginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)
    const from = location.state?.from?.pathname || '/';
    
    
    if(token){
        navigate(from, { replace: true });
        
    }
    // email login
    const handleLogin = (data) =>{
        serError(' ')
        emailLogin(data.email,data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
           
            setloginUserEmail(data.email)
            
            // navigate(from,{replace:true})
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            serError(errorMessage)
          });
    }

    // google login
    const googleHandlening = ()=>{
        googleLogin()
        .then((result) => {
            const user = result.user;
            console.log(user);
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    // useEffect(()=>{
    //     if(user){
    //         return navigate(from,{replace:true})
    //     }
    // },[user])

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96'>
                <h2 className='text-4xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full ]">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email",{required: "Email Address is required"})} className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ]">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",{minLength:{value:6, message:'password min length 6 '}, required:"password Address is required"})} className="input input-bordered w-full " />
                        <p className='text-secondary'> <Link to={'/forgetpassword'}>Forget password</Link></p>
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            
                        {error && <p className='text-red-600' role="alert">{error}</p>}

                        </label>
                    </div>


                    <input className='btn w-full' value='Submit' type="submit" />
                </form>
                <p>New to Doctor Portal  <Link className='text-secondary' to='/singup'>Create account</Link></p>
                <div className="flex flex-col w-full border-opacity-50">
                    
                    <div className="divider">OR</div>
                  
                </div>
                <button onClick={googleHandlening}  className='btn w-full'>Google Login</button>
            </div>
        </div>
    );
};

export default Login;