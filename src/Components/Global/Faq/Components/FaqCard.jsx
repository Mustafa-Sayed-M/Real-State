import React from 'react';

function FaqCard({ faqData }) {

    const {
        question,
        answer
    } = faqData;

    return (
        <div className='faq-card p-3 md:p-5 border border-grey-color-15 rounded-md'>
            {/* Quiz */}
            <h2 className='text-lg font-semibold mb-2 line-clamp-1'>{question}</h2>
            {/* Answer */}
            <p className='text-grey-color-60 mb-4 line-clamp-2'>{answer}</p>
            {/* Read More */}
            <button
                aria-label='Read More'
                title='Read More'
                type='button'
                className='py-2 px-4 rounded-md border border-grey-color-15'
            >
                Read More
            </button>
        </div>
    )
}

export default FaqCard;