import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';

const DispalyError = () => {
    const { logOut } = useContext(AuthProvider)
    const navigate = useNavigate()
    const error = useRouteError();
    // logout
    const singOut = () => {
        logOut()
            .then(()=>{
                navigate('/login')
            })
    }  
    return (
        <div className='text-center'>
            <p className='text-red-500'>Something went wrong!</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <li onClick={singOut}><button>Log Out</button></li>
        </div>
    );
};

export default DispalyError;