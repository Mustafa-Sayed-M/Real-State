import React from 'react';
import Landing from '../Components/Contact_Components/Landing/Landing';
import Features from '../Components/Shared/Features';
import ContactSection from '../Components/Contact_Components/ContactSection/ContactSection';

function Contact() {
    return (
        <div className='contact-page'>
            {/* Landing */}
            <Landing />
            {/* Features */}
            <Features />
            {/* Contact Section */}
            <ContactSection />
        </div>
    )
}

export default Contact;