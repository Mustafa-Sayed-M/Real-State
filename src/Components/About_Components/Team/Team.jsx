import React from 'react';
import HeadSection from '../../Shared/HeadSection';
import teamData from '../../../Data/team.json';
import TeamCard from './Components/TeamCard';

function Team() {
    return (
        <section className='team py-10' id='experiences'>
            <div className='container'>
                {/* Head Section */}
                <HeadSection
                    title={'Meet the Estatein Team'}
                    description={`At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.`}
                />
                {/* Content Grid */}
                <div className='content-grid grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {
                        teamData.map((teamData, index) => <TeamCard key={index} teamData={teamData} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Team;