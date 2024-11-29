import React from 'react';

function ValueCard({ valueData }) {

    const { icon, name, description } = valueData;

    return (
        <div className='value-card p-5 space-y-2'>
            {/* Header */}
            <div className='header flex items-center gap-2'>
                {/* Icon */}
                <div className='w-10 h-10 flex items-center justify-center rounded-full border border-purple-color-60'>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/${icon}`}
                        alt={name}
                        width={20}
                    />
                </div>
                {/* Name */}
                <h2 className='font-medium'>{name}</h2>
            </div>
            {/* Description */}
            <p className='text-grey-color-60'>{description}</p>
        </div>
    )
}

export default ValueCard;