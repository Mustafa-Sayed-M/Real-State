import React from 'react';

function TestimonialCard({ testimonialData }) {

    const {
        title,
        author: {
            avatar,
            name,
            job,
        },
        content
    } = testimonialData;

    return (
        <div className='testimonial-card p-3 md:p-5 rounded-md border border-grey-color-15 space-y-5'>
            {/* Rating */}
            <ul className='text-[#ffe500] flex items-center gap-2'>
                <li className='w-10 h-10 flex items-center justify-center bg-grey-color-8 border border-grey-color-15 rounded-full p-1'><i className="fa-solid fa-star"></i></li>
                <li className='w-10 h-10 flex items-center justify-center bg-grey-color-8 border border-grey-color-15 rounded-full p-1'><i className="fa-solid fa-star"></i></li>
                <li className='w-10 h-10 flex items-center justify-center bg-grey-color-8 border border-grey-color-15 rounded-full p-1'><i className="fa-solid fa-star"></i></li>
                <li className='w-10 h-10 flex items-center justify-center bg-grey-color-8 border border-grey-color-15 rounded-full p-1'><i className="fa-solid fa-star"></i></li>
                <li className='w-10 h-10 flex items-center justify-center bg-grey-color-8 border border-grey-color-15 rounded-full p-1'><i className="fa-solid fa-star"></i></li>
            </ul>
            {/* Text Wrapper */}
            <div className='text-wrapper space-y-2'>
                {/* Title */}
                <h4 className='font-medium'>{title}</h4>
                {/* Content */}
                <p className='text-grey-color-60 line-clamp-2'>{content}</p>
            </div>
            {/* Author */}
            <div className='author flex items-center gap-2'>
                {/* Author Avatar */}
                <img
                    src={`${process.env.PUBLIC_URL}/assets/${avatar}`}
                    alt={name}
                    className='w-[40px] h-[40px] rounded-full object-cover'
                />
                {/* Author Info */}
                <div className='author-info'>
                    {/* Author Name */}
                    <p>{name}</p>
                    {/* Author Job */}
                    <p className='text-grey-color-60'>{job}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;