import React from 'react';

function AchievementCard({ achievementData }) {

    const { name, description } = achievementData;

    return (
        <div className='value-card bg-[#191919] p-2 rounded-md'>
            {/* Content Wrapper */}
            <div className='content-wrapper p-5 bg-grey-color-8 border border-grey-color-15 rounded-md h-full'>
                {/* Name */}
                <h2 className='font-semibold text-xl mb-3'>{name}</h2>
                {/* Description */}
                <p className='text-grey-color-60'>{description}</p>
            </div>
        </div>
    )
}

export default AchievementCard;