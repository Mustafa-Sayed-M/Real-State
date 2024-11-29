import React from 'react';

function ExperienceCard({ experienceData }) {

    const { id, name, description } = experienceData;

    return (
        <div className='value-card relative overflow-hidden'>
            {/* Light */}
            <div className='light w-[100px] h-[100px] bg-purple-color-60 rounded-full absolute left-0 top-0 -translate-x-1/2 blur-xl opacity-20'></div>
            {/* Step Number */}
            <div className='step-number p-3 border-l border-l-grey-color-15'>
                Step 0{id}
            </div>
            {/* Content Wrapper */}
            <div className='text-wrapper space-y-3 rounded-md rounded-tl-none border border-grey-color-15 p-3'>
                {/* Name */}
                <h2 className='font-semibold text-xl'>{name}</h2>
                {/* Description */}
                <p className='text-grey-color-60 line-clamp-2'>{description}</p>
            </div>
        </div>
    )
}

export default ExperienceCard;