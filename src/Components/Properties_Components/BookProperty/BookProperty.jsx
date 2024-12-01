import React from 'react';
import HeadSection from '../../Shared/HeadSection';
import BookForm from './Components/BookForm';

function BookProperty() {
    return (
        <section className='book-property py-10' id='achievements'>
            <div className='container'>
                {/* Head Section */}
                <HeadSection
                    title={`Let's Make it Happen`}
                    description={`Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.`}
                />
                {/* Book Form */}
                <BookForm />
            </div>
        </section>
    )
}

export default BookProperty;