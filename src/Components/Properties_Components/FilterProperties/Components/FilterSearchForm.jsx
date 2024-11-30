import React from 'react';

function FilterSearchForm() {

    const handleSubmit = (e) => {
        e.preventDefault()
    };

    return (
        <form onSubmit={handleSubmit} className='rounded-md rounded-b-none bg-grey-color-10 p-2 relative'>
            {/* Input */}
            <input
                id='search'
                required
                name='search'
                type='text'
                className='w-full focus:outline-none p-4 rounded-md rounded-b-none bg-grey-color-8 border border-grey-color-15'
                placeholder='Search For A Property'
            />
            {/* Submit */}
            <button
                type='submit'
                className='absolute right-4 top-1/2 -translate-y-1/2 py-2 px-4 rounded-md font-medium bg-purple-color-60 sm:hover:bg-white sm:hover:text-purple-color-60 transition'
            >
                <i className="fa-solid fa-magnifying-glass mr-2"></i>
                <span>Find Property</span>
            </button>
        </form>
    )
}

export default FilterSearchForm;