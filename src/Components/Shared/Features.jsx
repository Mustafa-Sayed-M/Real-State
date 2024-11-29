import React from 'react';
import { Link } from 'react-router-dom';
import features from '../../Data/features.json';

const FeatureCard = ({ featureData }) => {

    const { icon, text } = featureData;

    return (
        <Link to={'/properties'} className='feature-card block p-3 rounded-md border border-grey-color-15 group'>
            {/* Arrow Icon */}
            <span className='text-grey-color-30 ms-auto block w-fit rotate-45 text-2xl sm:group-hover:text-purple-color-60 sm:group-hover:rotate-90 sm:group-hover:scale-110 transition'>
                <i className="fa-solid fa-arrow-up"></i>
            </span>
            {/* Icon */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/${icon}`}
                alt={text}
                className='mx-auto mb-2'
            />
            {/* Text */}
            <h3 className='font-medium text-center'>{text}</h3>
        </Link>
    )
};

function Features() {
    return (
        <section className='features grid sm:grid-cols-2 md:grid-cols-4 gap-3 p-3 bg-grey-color-10' id='features'>
            {features.map((feature, index) => <FeatureCard key={index} featureData={feature} />)}
        </section>
    )
}

export default Features;