import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const linksData = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/properties', text: 'Properties' },
    { to: '/services', text: 'Services' },
];

function NavbarLinks() {

    const { openNavbarMenu } = useSelector(state => state.app);

    return (
        <ul className={`flex items-center gap-1 max-md:order-1 max-md:w-full max-md:flex-col ${!openNavbarMenu && 'max-md:hidden'}`}>
            {
                linksData.map((link, index) => <li key={index} className='max-md:w-full'>
                    <NavLink
                        to={link.to}
                        className={({ isActive }) => `transition border max-md:block rounded-md py-2 px-4 ${isActive ? 'border-grey-color-15 bg-grey-color-8' : 'border-transparent md:hover:bg-grey-color-8 md:hover:border-grey-color-15'}`}
                    >
                        {link.text}
                    </NavLink>
                </li>)
            }
            {/* Contact Link */}
            <li className='max-md:w-full md:hidden'>
                <NavLink
                    to={'/contact'}
                    className={({ isActive }) => `transition border max-md:block rounded-md py-2 px-4 ${isActive ? 'border-grey-color-15 bg-grey-color-8' : 'border-transparent md:hover:bg-grey-color-8 md:hover:border-grey-color-15'}`}
                >
                    Contact Us
                </NavLink>
            </li>
        </ul>
    )
}

export default NavbarLinks;