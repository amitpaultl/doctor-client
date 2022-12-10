import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';

const Nave = () => {
    const { user, logOut } = useContext(AuthProvider)
    // logout
    const singOut = () => {
        logOut()
            .then()
    }

    const menu = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/appointment'}>Appointment</NavLink></li>
        {
            user?.uid ? <>
                <li><NavLink to={'/dashboard/allUser'}>dashboard</NavLink></li>
                <li onClick={singOut}><Link>Log Out</Link></li>
            </>
                :
                <>
                    <li><NavLink to={'/login'}>Login</NavLink></li>
                    <li><NavLink to={'/singup'}>Sing Up</NavLink></li>

                </>
        }

    </>
    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Doctor portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            <label htmlFor="toggleDashBoard" tabIndex={1} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Nave;