import React from 'react';
import investmentsData from '../../../Data/investments.json';
import InvestmentCard from './Components/InvestmentCard';
import { Link } from 'react-router-dom';

function Investments() {
    return (
        <section className='investments py-10' id='investments'>
            <div className='container'>
                {/* Content Grid */}
                <div className='content-grid grid md:grid-cols-3 gap-7 items-start'>
                    {/* Text Area */}
                    <div className='text-area'>
                        <h1 className='text-3xl font-semibold mb-3'>Smart Investments, Informed Decisions</h1>
                        <p className='text-grey-color-60'>Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.</p>
                        {/* Box */}
                        <div
                            style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/shared_imgs/card-bg.png)`,
                                backgroundSize: 'cover',
                            }}
                            className='rounded-md bg-grey-color-10 flex items-center p-5 mt-2'
                        >
                            {/* Content Wrapper */}
                            <div className='content-wrapper w-full space-y-2'>
                                {/* Title */}
                                <h1 className='font-bold'>Unlock Your Investment Potential</h1>
                                {/* Description */}
                                <p className='text-grey-color-60'>Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                                {/* Link */}
                                <Link className='block w-full text-center py-2 px-4 rounded-md bg-grey-color-8 border border-grey-color-15' to={'/'}>Learn More</Link>
                            </div>
                        </div>
                    </div>
                    {/* Investments Data Area */}
                    <div className='investments-data-area md:col-span-2 bg-[#191919] p-2 rounded-md'>
                        {/* Values Data Grid */}
                        <div className='values-data-grid grid md:grid-cols-2 bg-grey-color-8 border border-grey-color-15 rounded-md'>
                            {
                                investmentsData.map((investmentData, index) => <InvestmentCard key={index} investmentData={investmentData} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Investments;