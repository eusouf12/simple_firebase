import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const links = <>
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#be0abe] border-[1px] border-[#23BE0A] text-lg' : 'btn-ghost'}>
            Home</NavLink></li>
        <li><NavLink to={"/login"} className={({ isActive }) => isActive ? 'text-[#be0abe] border-[1px] border-[#23BE0A] text-lg' : 'btn-ghost'}>
            Login Page</NavLink></li>

    </>

    return (
        

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-28' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqPl4Ln0ZoS3SDJrunG3AX-Tdi_U3ED7U4ovLFid7Cw&s" alt="" />
                    <a className="btn btn-ghost text-xl lg:text-3xl">FireBase</a>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-3 space-x-5">
                    {links}
                </ul>
            </div>
            <div className='navbar-end'>
            <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            </div>
        </div>
    );
};

export default Header;