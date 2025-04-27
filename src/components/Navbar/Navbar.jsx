import React from 'react';

import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>


            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">

                </div>
                <div className="navbar-center">
                    <ul className='flex gap-4 '>
                        <NavLink to='/' className={({ isActive }) =>
                            isActive ? "active text-blue-500 underline" : ""
                        }>
                            Home
                        </NavLink>
                        <NavLink to={'/login'} className={({ isActive }) =>
                            isActive ? "active text-blue-500 underline" : ""
                        }>
                            Login
                        </NavLink>
                        <NavLink to={'/registration'} className={({ isActive }) =>
                            isActive ? "active text-blue-500 underline" : ""
                        }>
                            Registration
                        </NavLink>
                        
                        <NavLink to={'/sign-up'} className={({ isActive }) =>
                            isActive ? "active text-blue-500 underline" : ""
                        }>
                            Sign Up
                        </NavLink>
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default Navbar;