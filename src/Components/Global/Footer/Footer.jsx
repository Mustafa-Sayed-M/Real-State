import React from 'react';
import { useNavigate } from 'react-router-dom';


function Footer() {

    const navigate = useNavigate();

    const handleClick = (e, page) => {
        e.preventDefault();
        const sectionElement = document.getElementById(e.target.dataset.sectionId);
        if (sectionElement) {
            navigate(page);
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        };
    };

    return (
        <footer className='py-7'>
            <div className='container space-y-7'>
                {/* Form */}
                <form className='bg-red-100'>
                    Form
                </form>
                {/* Content Grid */}
                <div className='content-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                    {/* Home Links */}
                    <div>
                        <h3 className='text-grey-color-60 font-medium mb-2'>Home</h3>
                        <ul>
                            <li>
                                <a onClick={e => handleClick(e, '/')} className='block py-2 sm:hover:underline' href='/landing' data-sectionId='landing'>Hero Section</a>
                            </li>
                            <li>
                                <a onClick={e => handleClick(e, '/')} className='block py-2 sm:hover:underline' href='/features' data-sectionId='features'>Features</a>
                            </li>
                            <li>
                                <a onClick={e => handleClick(e, '/')} className='block py-2 sm:hover:underline' href='/properties' data-sectionId='featured-properties'>Properties</a>
                            </li>
                            <li>
                                <a onClick={e => handleClick(e, '/')} className='block py-2 sm:hover:underline' href='/testimonials' data-sectionId='testimonials'>Testimonials</a>
                            </li>
                            <li>
                                <a onClick={e => handleClick(e, '/')} className='block py-2 sm:hover:underline' href='/faq' data-sectionId='faq'>FAQ’s</a>
                            </li>
                        </ul>
                    </div>
                    {/* About Links */}
                    <div>
                        <h3 className='text-grey-color-60 font-medium mb-2'>About Us</h3>
                        <ul>
                            <li>
                                <a onClick={e => handleClick(e)} className='block py-2 sm:hover:underline' href='/'>Our Story</a>
                            </li>
                            <li>
                                <a onClick={e => handleClick(e)} className='block py-2 sm:hover:underline' href='/'>Our Works</a>
                            </li>
                            <li>
                                <a onClick={e => handleClick(e)} className='block py-2 sm:hover:underline' href='/'>How It Works</a>
                            </li>
                            <li>
                                <a onClick={e => handleClick(e)} className='block py-2 sm:hover:underline' href='/'>Our Team</a>
                            </li>
                            <li>
                                <a onClick={e => handleClick(e)} className='block py-2 sm:hover:underline' href='/'>Our Clients</a>
                            </li>
                        </ul>
                    </div>
                    {/* Properties Links */}
                    <div>
                        <h3 className='text-grey-color-60 font-medium mb-2'>Properties</h3>
                        <ul>
                            <li>
                                <a onClick={e => handleClick(e)} className='block py-2 sm:hover:underline' href='/'>Portfolio</a>
                            </li>
                            <li>
                                <a onClick={e => handleClick(e)} className='block py-2 sm:hover:underline' href='/'>Categories</a>
                            </li>
                        </ul>
                    </div>
                    {/* Services Links */}
                    <div>
                        <h3 className='text-grey-color-60 font-medium mb-2'>Services</h3>
                        <ul>
                            <li>
                                <a onClick={e => handleClick(e)} className='block py-2 sm:hover:underline' href='/'>Valuation Mastery</a>
                            </li>
                            <li>
                                <a onClick={e => handleClick(e)} className='block py-2 sm:hover:underline' href='/'>Strategic Marketing</a>
                            </li>
                            <li>
                                <a onClick={e => handleClick(e)} className='block py-2 sm:hover:underline' href='/'>Negotiation Wizardry</a>
                            </li>
                            <li>
                                <a onClick={e => handleClick(e)} className='block py-2 sm:hover:underline' href='/'>Closing Success</a>
                            </li>
                            <li>
                                <a onClick={e => handleClick(e)} className='block py-2 sm:hover:underline' href='/'>Property Management</a>
                            </li>
                        </ul>
                    </div>
                    {/* Contact Links */}
                    <div>
                        <h3 className='text-grey-color-60 font-medium mb-2'>Contact Us</h3>
                        <ul>
                            <li>
                                <a onClick={e => handleClick(e)} className='block py-2 sm:hover:underline' href='/'>Contact Form</a>
                            </li>
                            <li>
                                <a onClick={e => handleClick(e)} className='block py-2 sm:hover:underline' href='/'>Our Offices</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Copyright */}
                <div className='copyright'>
                    Copyright
                </div>
            </div>
        </footer>
    )
}

export default Footer;