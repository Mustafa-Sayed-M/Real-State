import React from 'react';
import { Link } from 'react-router-dom';
import SocialProfile from './Components/SocialProfile';
import Links from './Components/Links';
import FormSubscribe from './Components/FormSubscribe';

function Footer() {
    return (
        <footer>
            <div className='container space-y-7 py-7'>
                {/* Form Subscribe */}
                <FormSubscribe />
                {/* Content Grid */}
                <div className='content-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                    {/* Home Links */}
                    <Links
                        title={'Home'}
                        linksData={[
                            { href: '/landing', text: 'Hero Section' },
                            { href: '/features', text: 'Features' },
                            { href: '/properties', text: 'Properties' },
                            { href: '/testimonials', text: 'Testimonials' },
                            { href: '/faq', text: 'FAQ’s' },
                        ]}
                    />
                    {/* About Links */}
                    <Links
                        title={'About'}
                        linksData={[
                            { href: '/', text: 'About Us' },
                            { href: '/', text: 'Our Story' },
                            { href: '/', text: 'Our Works' },
                            { href: '/', text: 'How It Works' },
                            { href: '/', text: 'Our Team' },
                            { href: '/', text: 'Our Clients' },
                        ]}
                    />
                    {/* Properties Links */}
                    <Links
                        title={'Properties'}
                        linksData={[
                            { href: '/', text: 'Properties' },
                            { href: '/', text: 'Portfolio' },
                            { href: '/', text: 'Categories' },
                        ]}
                    />
                    {/* Services Links */}
                    <Links
                        title={'Services'}
                        linksData={[
                            { href: '/', text: 'Valuation Mastery' },
                            { href: '/', text: 'Strategic Marketing' },
                            { href: '/', text: 'Negotiation Wizardry' },
                            { href: '/', text: 'Success' },
                            { href: '/', text: 'Property Management' },
                        ]}
                    />
                    {/* Contact Links */}
                    <Links
                        title={'Contact'}
                        linksData={[
                            { href: '/', text: 'Contact Us' },
                            { href: '/', text: 'Contact Form' },
                            { href: '/', text: 'Our Offices' },
                        ]}
                    />
                </div>
            </div>
            {/* Copyright */}
            <div className='copyright bg-grey-color-10 py-3'>
                <div className='container flex items-center justify-between gap-3 max-md:flex-col'>
                    {/* Condition Used Links */}
                    <ul className='flex items-center gap-2 max-sm:flex-col'>
                        <li>
                            <Link to={'/'} className='sm:hover:text-purple-color-60 transition'>@2023 Estatein. All Rights Reserved.</Link>
                        </li>
                        <li>
                            <Link to={'/'} className='sm:hover:text-purple-color-60 transition'>Terms & Conditions</Link>
                        </li>
                    </ul>
                    {/* Social Links */}
                    <SocialProfile />
                </div>
            </div>
        </footer>
    )
}

export default Footer;