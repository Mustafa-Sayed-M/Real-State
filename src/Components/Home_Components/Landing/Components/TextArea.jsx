import React from 'react';
import { Link } from 'react-router-dom';

// Links
const Links = () => {
    return (
        <div className='links flex max-md:flex-col items-center gap-2'>
            {/* Learn More */}
            <Link
                to={'/properties'}
                className='block max-md:w-full max-md:text-center py-2 px-4 border border-grey-color-15 font-medium rounded-md'
            >
                Learn More
            </Link>
            {/* Browser Properties */}
            <Link
                to={'/properties'}
                className='block max-md:w-full max-md:text-center py-2 px-4 bg-purple-color-60 font-medium rounded-md'
            >
                Browser Properties
            </Link>
        </div>
    )
};

// Statices
const Statics = () => {
    return (
        <div className='statics flex flex-wrap items-center gap-2'>
            {/* Box */}
            <div className='box max-md:text-center flex-1 bg-grey-color-10 border border-grey-color-15 p-3 rounded-md'>
                <h1 className='font-bold text-xl'>200+</h1>
                <p className='text-sm text-grey-color-60'>Happy Customers</p>
            </div>
            {/* Box */}
            <div className='box max-md:text-center flex-1 bg-grey-color-10 border border-grey-color-15 p-3 rounded-md'>
                <h1 className='font-bold text-xl'>10k+</h1>
                <p className='text-sm text-grey-color-60'>HProperties For Clients</p>
            </div>
            {/* Box */}
            <div className='box max-md:text-center md:flex-1 max-md:w-full bg-grey-color-10 border border-grey-color-15 p-3 rounded-md'>
                <h1 className='font-bold text-xl'>16+</h1>
                <p className='text-sm text-grey-color-60'>Years of Experience</p>
            </div>
        </div>
    )
};

function TextArea() {
    return (
        <div className='text-area space-y-5 md:flex-1 max-md:order-1 max-md:pt-8'>
            {/* Text */}
            <div className='text-wrapper space-y-2'>
                <h1 className='text-3xl font-semibold'>Discover Your Dream Property with Estatein</h1>
                <p className='text-grey-color-60'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
            </div>
            {/* Links */}
            <Links />
            {/* Statices */}
            <Statics />
        </div>
    )
}

export default TextArea;
