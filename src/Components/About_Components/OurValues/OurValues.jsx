import React from 'react';
import valuesData from '../../../Data/values.json';
import ValueCard from './Components/ValueCard';

function OurValues() {
    return (
        <section className='values py-10' id='values'>
            <div className='container'>
                {/* Content Grid */}
                <div className='content-grid grid md:grid-cols-3 gap-5 items-center'>
                    {/* Text Area */}
                    <div className='text-area'>
                        <h1 className='text-3xl font-semibold mb-3'>Our Values</h1>
                        <p className='text-grey-color-60'>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
                    </div>
                    {/* Values Data Area */}
                    <div className='values-data-area md:col-span-2 bg-[#191919] p-2 rounded-md'>
                        {/* Values Data Grid */}
                        <div className='values-data-grid grid md:grid-cols-2 bg-grey-color-8 border border-grey-color-15 rounded-md'>
                            {
                                valuesData.map((valueData, index) => <ValueCard key={index} valueData={valueData} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurValues;