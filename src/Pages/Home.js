import React from 'react';
import Testimonials from '../Components/Home_Components/Testimonials/Testimonials';
import Faq from '../Components/Global/Faq/Faq';
import FeaturedProperties from '../Components/Home_Components/FeaturedProperties/FeaturedProperties';
import Landing from '../Components/Home_Components/Landing/Landing';

function Home() {
    return (
        <div className='home-page'>
            {/* Landing */}
            <Landing />
            {/* Featured Properties */}
            <FeaturedProperties />
            {/* Testimonials */}
            <Testimonials />
            {/* Faq */}
            <Faq />
        </div>
    )
}

export default Home;