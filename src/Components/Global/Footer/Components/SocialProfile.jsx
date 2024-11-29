import React from 'react';
import socialLinks from '../../../../Data/socialProfile.json';

function SocialProfile() {
    return (
        <ul className='flex items-center gap-2'>
            {
                socialLinks.map((link, index) => <li key={index}>
                    <a
                        title={`Go to ${link.fontAwesomeIconClass} Profile`}
                        href={link.href}
                        target='_blank'
                        rel="noreferrer"
                        className='block w-10 h-10 leading-10 text-center text-xl rounded-full bg-grey-color-8 sm:hover:text-purple-color-60 transition'
                    >
                        <i className={`fa-brands fa-${link.fontAwesomeIconClass} fa-fw`}></i>
                    </a>
                </li>)
            }
        </ul>
    )
}

export default SocialProfile;