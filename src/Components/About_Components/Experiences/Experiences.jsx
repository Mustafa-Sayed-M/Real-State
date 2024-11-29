import React from 'react';
import experiencesData from '../../../Data/experiences.json';
import HeadSection from '../../Shared/HeadSection';
import ExperienceCard from './Components/ExperienceCard';

function Experiences() {
    return (
        <section className='experiences py-10' id='experiences'>
            <div className='container'>
                {/* Head Section */}
                <HeadSection
                    title={'Navigating the Estatein Experience'}
                    description={`At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.`}
                />
                {/* Content Grid */}
                <div className='content-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        experiencesData.map((experienceData, index) => <ExperienceCard key={index} experienceData={experienceData} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Experiences;