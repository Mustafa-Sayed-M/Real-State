import React from 'react';
import achievementsData from '../../../Data/achievements.json';
import AchievementCard from './Components/AchievementCard';
import HeadSection from '../../Shared/HeadSection';

function OurAchievements() {
    return (
        <section className='achievements py-10' id='achievements'>
            <div className='container'>
                {/* Head Section */}
                <HeadSection
                    title={'Our Achievements'}
                    description={'Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.'}
                />
                {/* Content Grid */}
                <div className='content-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        achievementsData.map((achievementData, index) => <AchievementCard key={index} achievementData={achievementData} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default OurAchievements;