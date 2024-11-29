import React from 'react';

function TextArea() {
    return (
        <div className='text-area space-y-7'>
            {/* Text Wrapper */}
            <div className='text-wrapper space-y-2'>
                <h1 className='text-3xl font-semibold'>Our Journey</h1>
                <p className='text-grey-color-60'>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
            </div>
            {/* Boxes */}
            <div className='grid lg:grid-cols-3 gap-3'>
                {/* Box */}
                <div className='bg-grey-color-10 border border-grey-color-15 rounded-md p-3 md:p-5 max-sm:col-span-1 max-lg:text-center max-lg:col-span-2'>
                    <h1 className='font-bold text-4xl'>200+</h1>
                    <p className='text-grey-color-60 text-sm'>Happy Customers</p>
                </div>
                {/* Box */}
                <div className='bg-grey-color-10 border border-grey-color-15 rounded-md p-3 md:p-5 max-lg:text-center'>
                    <h1 className='font-bold text-4xl'>10k+</h1>
                    <p className='text-grey-color-60 text-sm'>Properties For Clients</p>
                </div>
                {/* Box */}
                <div className='bg-grey-color-10 border border-grey-color-15 rounded-md p-3 md:p-5 max-lg:text-center'>
                    <h1 className='font-bold text-4xl'>16+</h1>
                    <p className='text-grey-color-60 text-sm'>Years of Experience</p>
                </div>
            </div>
        </div>
    )
}

export default TextArea;