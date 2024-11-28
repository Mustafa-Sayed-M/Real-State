import React from 'react';

function HeroArea() {
    return (
        <div
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/home_imgs/landing_hero/hero-background.png)`,
                backgroundSize: 'cover'
            }}
            className='hero-area md:flex-1 relative bg-grey-color-10 max-md:rounded-xl'
        >
            {/* Hero Pattern */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/home_imgs/landing_hero/hero-pattern.png`}
                alt='Hero Pattern'
                className='absolute z-10 md:top-10 max-md:bottom-0 md:left-0 max-md:left-5 md:-translate-x-1/2 max-md:translate-y-1/2 max-md:w-[80px] md:w-[130px]'
            />
            {/* Hero Image */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/home_imgs/landing_hero/hero-image.png`}
                alt='Hero'
                className='max-md:rounded-xl'
            />
        </div>
    )
}

export default HeroArea;
