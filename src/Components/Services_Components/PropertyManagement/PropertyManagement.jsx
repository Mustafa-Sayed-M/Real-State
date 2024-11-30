import React from 'react';
import HeadSection from '../../Shared/HeadSection';
import propertyManagementData from '../../../Data/propertyManagement.json';
import PropertyManagementCard from './Components/PropertyManagementCard';
import { Link } from 'react-router-dom';

function PropertyManagement() {
    return (
        <section className='property-management py-10' id='achievements'>
            <div className='container'>
                {/* Head Section */}
                <HeadSection
                    title={'Effortless Property Management'}
                    description={`Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you`}
                />
                {/* Content Grid */}
                <div className='content-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {/* Cards */}
                    {
                        propertyManagementData.map((propertyManagementData, index) => <PropertyManagementCard key={index} propertyManagementData={propertyManagementData} />)
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
                                <h1 className='text-2xl font-bold'>Experience Effortless Property Management</h1>
                                {/* Link */}
                                <Link className='block max-md:w-full max-md:text-center py-2 px-4 rounded-md bg-grey-color-8 border border-grey-color-15' to={'/'}>Learn More</Link>
                            </div>
                            {/* Description */}
                            <p className='text-grey-color-60'>Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertyManagement;