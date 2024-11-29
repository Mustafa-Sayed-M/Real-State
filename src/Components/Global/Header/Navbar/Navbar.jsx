import React from 'react';
import { Link } from 'react-router-dom';
import NavbarMenuToggler from './Components/NavbarMenuToggler';
import NavbarLinks from './Components/NavbarLinks';
import AppLogo from '../../../Shared/AppLogo';

function Navbar() {
    return (
        <nav className='bg-grey-color-10 border-b border-b-grey-color-15'>
            <div className='container min-h-[60px] py-3 flex flex-wrap gap-3 items-center justify-between'>
                {/* Logo */}
                <AppLogo />
                {/* Links */}
                <NavbarLinks />
                {/* Contact Link */}
                <Link
                    to={'/contact'}
                    className='block bg-grey-color-8 border border-grey-color-15 rounded-md py-2 px-4 max-md:hidden'
                >
                    Contact Us
                </Link>
                {/* Menu Toggler */}
                <NavbarMenuToggler />
            </div>
        </nav>
    )
}

export default Navbar;