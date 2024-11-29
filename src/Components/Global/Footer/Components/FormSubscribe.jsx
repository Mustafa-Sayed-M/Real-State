import React from 'react';
import AppLogo from '../../../Shared/AppLogo';

function FormSubscribe() {
    return (
        <form onSubmit={e => e.preventDefault()}>
            {/* Logo */}
            <AppLogo />
            {/* Input Group */}
            <div className='input-group relative mt-3'>
                {/* Label */}
                <label htmlFor='email' className='absolute top-1/2 -translate-y-1/2 left-3 text-grey-color-60'>
                    <i className="fa-solid fa-envelope fa-fw"></i>
                </label>
                {/* Input */}
                <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    autoComplete='off'
                    placeholder='Enter Your Email'
                    className='w-full focus:outline-none py-2 pl-9 pr-2 rounded-md border border-grey-color-15 bg-transparent placeholder:text-grey-color-60 placeholder:font-medium'
                />
                {/* Submit */}
                <button
                    type='submit'
                    aria-label='Submit'
                    title='Send'
                    className='rounded-md text-white font-medium absolute right-3 top-1/2 -translate-y-1/2'
                >
                    <i className="fa-solid fa-paper-plane fa-fw"></i>
                </button>
            </div>
        </form>
    )
}

export default FormSubscribe;