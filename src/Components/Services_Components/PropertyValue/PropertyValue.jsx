import React from 'react';
import HeadSection from '../../Shared/HeadSection';
import propertyValueData from '../../../Data/propertyValue.json';
import PropertyValueCard from './Components/PropertyValueCard';
import { Link } from 'react-router-dom';

function PropertyValue() {
    return (
        <section className='property-value py-10' id='achievements'>
            <div className='container'>
                {/* Head Section */}
                <HeadSection
                    title={'Unlock Property Value'}
                    description={`Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey`}
                />
                {/* Content Grid */}
                <div className='content-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {/* Cards */}
                    {
                        propertyValueData.map((propertyValueData, index) => <PropertyValueCard propertyValueData={propertyValueData} key={index} />)
                    }
                    {/* Box */}
                    <div
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/shared_imgs/card-bg.png)`,
                            backgroundSize: 'cover',
                        }}
                        className='md:col-span-2 rounded-md bg-grey-color-10 flex items-center p-5'
                    >
                        {/* Content Wrapper */}
                        <div className='content-wrapper w-full space-y-2'>
                            {/* Header */}
                            <div className='header flex md:items-center justify-between gap-3 max-md:flex-col'>
                                {/* Title */}
                                <h1 className='text-2xl font-bold'>Unlock the Value of Your Property Today</h1>
                                {/* Link */}
                                <Link className='block max-md:w-full max-md:text-center py-2 px-4 rounded-md bg-grey-color-8 border border-grey-color-15' to={'/'}>Learn More</Link>
                            </div>
                            {/* Description */}
                            <p className='text-grey-color-60'>Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertyValue;