import React from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({ propertyData }) {

    const {
        id,
        image,
        title,
        description,
        bedrooms,
        bathrooms,
        type,
        price,
    } = propertyData;

    const itemStyles = `bg-grey-color-10 border border-grey-color-15 rounded-full py-2 px-4 md:flex-1 max-md:w-full text-nowrap text-center`;

    return (
        <div className='property-card p-3 md:p-5 rounded-md border border-grey-color-15 space-y-5'>
            {/* Link Property */}
            <Link
                to={`/properties/${id}`}
                className='block'
            >
                {/* Image Property */}
                <img
                    // src={`${process.env.PUBLIC_URL}/assets/${image}`}
                    src={`https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799723.jpg?t=st=1732733736~exp=1732737336~hmac=87ec0948791cba1d788163df9155d615ba8f2b42f8a1031d74dd0cb3e8681ca0&w=740`}
                    alt={title}
                    className='rounded-md'
                />
            </Link>
            {/* Text Wrapper */}
            <div className='text-wrapper space-y-2'>
                {/* Title */}
                <h2 className='font-medium text-xl'>{title}</h2>
                {/* Description */}
                <p className='line-clamp-2 text-grey-color-60'>{description}</p>
            </div>
            {/* More Info */}
            <ul className='flex flex-wrap items-center gap-2'>
                {/* Bedrooms */}
                <li className={itemStyles}>
                    <i className="fa-solid fa-bed fa-fw mr-2"></i>
                    <span>{bedrooms}-Bedrooms</span>
                </li>
                {/* Bathrooms */}
                <li className={itemStyles}>
                    <i className="fa-solid fa-sink fa-fw mr-2"></i>
                    <span>{bathrooms}-Bathrooms</span>
                </li>
                {/* Type */}
                <li className={itemStyles}>
                    <i className="fa-solid fa-building fa-fw mr-2"></i>
                    <span>{type}</span>
                </li>
            </ul>
            {/* Foot */}
            <div className='foot flex flex-wrap gap-3 items-center justify-between'>
                {/* Price */}
                <div className='price'>
                    <p className='text-grey-color-60 text-sm'>Price</p>
                    <h1 className='font-semibold text-xl'>${price}</h1>
                </div>
                {/* Link Property */}
                <Link
                    to={`/properties/${id}`}
                    className='block py-2 w-full text-center px-4 rounded-md bg-purple-color-60 sm:hover:bg-white sm:hover:text-purple-color-60 font-medium transition'
                >
                    View Property Details
                </Link>
            </div>
        </div>
    )
}

export default PropertyCard;