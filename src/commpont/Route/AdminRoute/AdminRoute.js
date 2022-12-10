import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';
import useAdmin from '../../Hooks/useAdmin';
import Loding from '../../Page/Loading/Loding';

const AdminRoute = ({children}) => {
    // usecontext
    const {user,loading}=useContext(AuthProvider)
    // location
    const location = useLocation()
    // admin 
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    // loding
    if(loading || isAdminLoading){
        return <Loding></Loding>
    }

    if(user && isAdmin){
        return children
    }

    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default AdminRoute;