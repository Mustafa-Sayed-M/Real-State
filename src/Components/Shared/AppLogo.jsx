import React from 'react';
import { Link } from 'react-router-dom';

function AppLogo() {
    return (
        <Link
            to={'/'}
            className='flex items-center gap-2'
        >
            {/* Logo Icon */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                alt='Logo'
            />
            {/* Logo Name */}
            <span className='font-medium text-xl'>EstateIn</span>
        </Link>
    )
}

export default AppLogo;