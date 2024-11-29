import React from 'react';
import Landing from '../Components/About_Components/Landing/Landing';
import OurValues from '../Components/About_Components/OurValues/OurValues';
import OurAchievements from '../Components/About_Components/OurAchievements/OurAchievements';
import Experiences from '../Components/About_Components/Experiences/Experiences';
import Team from '../Components/About_Components/Team/Team';

function About() {
    return (
        <div className='about-page'>
            {/* Landing */}
            <Landing />
            {/* Our Values */}
            <OurValues />
            {/* Our Achievements */}
            <OurAchievements />
            {/* Experiences */}
            <Experiences />
            {/* Team */}
            <Team />
        </div>
    )
}

export default About;