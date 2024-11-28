import React from 'react';
import TextArea from './Components/TextArea';
import HeroArea from './Components/HeroArea';
import Features from '../../Shared/Features';

function Landing() {
    return (
        <section className='landing' id='landing'>
            <div className='container max-md:py-7 flex max-md:flex-col gap-5 items-center'>
                {/* Text Area */}
                <TextArea />
                {/* Hero Area */}
                <HeroArea />
            </div>
            {/* Features */}
            <Features />
        </section>
    )
}

export default Landing;