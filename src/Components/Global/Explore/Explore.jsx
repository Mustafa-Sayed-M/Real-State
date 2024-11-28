import React from 'react';
import { Link } from 'react-router-dom';

function Explore() {
    return (
        <section className='explore relative min-h-[250px] border-y border-y-grey-color-15' id='explore'>
            {/* Hero 1 */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/explore_heroes/hero-left.png`}
                alt='Hero'
                className='absolute left-0 top-0 object-cover h-full'
            />
            {/* Container */}
            <div className='container flex max-md:flex-col py-7 items-center gap-10 relative z-10 min-h-[250px]'>
                {/* Text Wrapper */}
                <div className='text-wrapper flex-1 space-y-3'>
                    <h1 className='font-semibold text-3xl'>Start Your Real Estate Journey Today</h1>
                    <p className='text-grey-color-60'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                </div>
                {/* Link */}
                <Link
                    to={'/properties'}
                    className='block max-sm:w-full max-sm:text-center py-2 px-4 rounded-md bg-purple-color-60 sm:hover:bg-white sm:hover:text-purple-color-60 font-medium transition'
                >
                    Explore Properties
                </Link>
            </div>
            {/* Hero 2 */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/explore_heroes/hero-right.png`}
                alt='Hero'
                className='absolute right-0 top-0 object-cover h-full'
            />
        </section>
    )
}

export default Explore;