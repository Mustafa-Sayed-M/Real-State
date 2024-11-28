import React from 'react';
import { Link } from 'react-router-dom';

function TopBar() {
    return (
        <div
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/topBar_background.png)`,
                backgroundSize: 'cover',
                minHeight: 50
            }}
            className='border-b border-b-grey-color-15 max-sm:hidden'
        >
            <div className='container min-h-[60px] flex items-center justify-center'>
                {/* Text */}
                <p>✨Discover Your Dream Property with Estatein</p>
                {/* Link Lead More */}
                <Link to={'/'} className='underline font-medium ms-2'>Lead More</Link>
            </div>
        </div>
    )
}

export default TopBar;