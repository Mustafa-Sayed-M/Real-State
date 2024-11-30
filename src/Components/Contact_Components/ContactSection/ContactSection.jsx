import React from 'react';
import HeadSection from '../../Shared/HeadSection';
import ContactForm from './Components/ContactForm';

function ContactSection() {
    return (
        <section className='contact-section py-10' id='contact-section'>
            <div className='container'>
                {/* Head Section */}
                <HeadSection
                    title={`Let's Connect`}
                    description={`We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.`}
                />
                {/* Contact Form */}
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactSection;