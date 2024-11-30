import React from 'react';

function PropertyValueCard({ propertyValueData }) {

    const { icon, name, description } = propertyValueData;

    return (
        <div className='property-value-card p-5 space-y-2 border border-grey-color-15 rounded-md'>
            {/* Header */}
            <div className='header flex items-center gap-3'>
                {/* Icon */}
                <img
                    src={`${process.env.PUBLIC_URL}/assets/${icon}`}
                    alt={name}
                    width={60}
                />
                {/* Name */}
                <h2 className='font-medium text-xl'>{name}</h2>
            </div>
            {/* Description */}
            <p className='text-grey-color-60'>{description}</p>
        </div>
    )
}

export default PropertyValueCard;