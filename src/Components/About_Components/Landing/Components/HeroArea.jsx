import React from 'react';

function HeroArea() {
    return (
        <div
            className='hero-area rounded-md border border-grey-color-15'
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/about_imgs/landing-bg-hero.png)`,
                backgroundSize: 'cover'
            }}
        >
            <img
                src={`${process.env.PUBLIC_URL}/assets/about_imgs/landing-hero.png`}
                alt='Landing Hero'
            />
        </div>
    )
}

export default HeroArea;