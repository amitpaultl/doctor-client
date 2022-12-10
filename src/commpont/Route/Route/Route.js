import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashBoardLayout from '../../Layout/DashBoardLayout';
import Main from '../../Layout/Main';
import Appointment from '../../Page/Appointment/MainAppoiment/Appointment';
import DasBord from '../../Page/DasBord/DasBord';
import AddDoctor from '../../Page/DashBoard/AddDoctor/AddDoctor';
import AllUser from '../../Page/DashBoard/AllUser/AllUser';
import ManageDoctor from '../../Page/DashBoard/ManageDoctor/ManageDoctor';
import MyAppointment from '../../Page/DashBoard/MyAppointment/MyAppointment';
import Payment from '../../Page/DashBoard/Payment/Payment';
import ForgetPassword from '../../Page/ForgetPassword';
import Home from '../../Page/Home/Home/Home';
import Login from '../../Page/Login/Login';
import SingUp from '../../Page/SingUp/SingUp';
import DispalyError from '../../Share/DispalyError/DispalyError';
import AdminRoute from '../AdminRoute/AdminRoute';
import PravectRoute from '../PravectRout/PravectRoute';

export const route = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement:<DispalyError></DispalyError>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },

            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/singup',
                element:<SingUp></SingUp>
            },
            {
                path:'/forgetpassword',
                element:<ForgetPassword></ForgetPassword>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
        ]
    },
    {
        path:'/dashboard',
        element:<PravectRoute><DashBoardLayout></DashBoardLayout></PravectRoute>,
        errorElement:<DispalyError></DispalyError>,
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/allUser',
                element:<AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path:'/dashboard/addDoctor',
                element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path:'/dashboard/manageDoctor',
                element:<AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/booking/${params.id}`)
                
            },
        ]
    }
])