import { prepareAutoBatched } from '@reduxjs/toolkit';
import React from 'react';

function TeamCard({ teamData }) {

    const { id, name, job, facebookProfile, pic } = teamData;
    return (
        <div className='team-card p-3 rounded-md border border-grey-color-15'>
            {/* Pic */}
            <div className='pic-container'>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/${pic}`}
                    alt={name}
                    className='rounded-md'
                />
            </div>
            {/* Facebook */}
            <a
                href={facebookProfile}
                target='_blank'
                rel="noreferrer"
                className='block rounded-full bg-purple-color-60 py-2 px-5 w-fit mx-auto -translate-y-1/2 relative z-10 text-xl'
            >
                <i className='fa-brands fa-facebook fa-fw'></i>
            </a>
            {/* Info text */}
            <div className='info-text space-y-1 text-center'>
                {/* Name */}
                <h3 className='font-medium text-xl'>{name}</h3>
                {/* Job */}
                <p className='text-grey-color-60'>{job}</p>
            </div>
            {/* Form Send */}
            <form onSubmit={e => e.preventDefault()} className='mt-3 relative'>
                <input
                    type='text'
                    name='message'
                    id='message'
                    required
                    defaultValue={"Say Hello 👋"}
                    placeholder='Enter Your Message'
                    className='focus:outline-none py-4 px-5 rounded-full w-full bg-grey-color-10 border border-grey-color-15'
                />
                {/* Submit */}
                <button
                    type='submit'
                    className='absolute right-3 top-1/2 -translate-y-1/2 bg-purple-color-60 w-10 h-10 leading-10 text-center rounded-full text-white font-medium'
                >
                    <i className="fa-solid fa-paper-plane fa-fw"></i>
                </button>
            </form>
        </div>
    )
}

export default TeamCard;