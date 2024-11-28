import React from 'react';
import { Link } from 'react-router-dom';

function HeadSection({ title, description, link }) {
    return (
        <div className='head-section mb-7 flex flex-wrap items-center justify-center gap-5'>
            {/* Text Wrapper */}
            <div className='text-wrapper space-y-2 md:flex-1 max-md:w-full'>
                {/* Title */}
                <h1 className='text-3xl font-semibold'>{title}</h1>
                {/* Description */}
                <p className='text-grey-color-60'>{description}</p>
            </div>
            {/* Link */}
            {
                link && (
                    <Link
                        to={link.to}
                        className='block max-sm:w-full max-sm:text-center py-2 px-4 rounded-md bg-grey-color-8 border border-grey-color-15 font-medium sm:hover:bg-purple-color-60 sm:hover:text-white sm:hover:border-purple-color-60 transition'
                    >
                        {link.text}
                    </Link>
                )
            }
        </div>
    )
}

export default HeadSection;