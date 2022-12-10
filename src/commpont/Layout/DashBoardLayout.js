import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext/AuthContext';
import useAdmin from '../Hooks/useAdmin';
import Nave from '../Share/Nave/Nave';

const DashBoardLayout = () => {
    const {user} = useContext(AuthProvider)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Nave></Nave>
            <div className="drawer drawer-mobile">
                <input id="toggleDashBoard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="toggleDashBoard" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                       
                        <li><Link to={'/dashboard'}>My Appointment</Link></li>
                        {
                            
                            isAdmin && <>

                                <li><Link to={'/dashboard/allUser'}>All User</Link></li>
                                <li><Link to={'/dashboard/addDoctor'}>Add Doctor</Link></li>
                                <li><Link to={'/dashboard/manageDoctor'}>Manage Doctor</Link></li>
                            </> 
                            
                        }
                    </ul>

                </div>
            </div>
            
        </div>
    );
};

export default DashBoardLayout;