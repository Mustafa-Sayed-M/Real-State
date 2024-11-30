import React from 'react';
import Landing from '../Components/Services_Components/Landing/Landing';
import Features from '../Components/Shared/Features';
import Investments from '../Components/Services_Components/Investments/Investments';
import PropertyManagement from '../Components/Services_Components/PropertyManagement/PropertyManagement';
import PropertyValue from '../Components/Services_Components/PropertyValue/PropertyValue';

function Services() {
    return (
        <div className='services-page'>
            {/* Landing */}
            <Landing />
            {/* Features */}
            <Features />
            {/* Property Value */}
            <PropertyValue />
            {/* Property Management */}
            <PropertyManagement />
            {/* Investments */}
            <Investments />
        </div>
    )
}

export default Services;