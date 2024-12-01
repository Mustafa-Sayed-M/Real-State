import { ErrorMessage, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: '',
    howDidYouHearAboutUs: '',
};

const validationSchema = {
    firstName: Yup.string().min(2).max(50).required(),
    lastName: Yup.string().min(2).max(50).required(),
    email: Yup.string().email().required(),
    phone: Yup.number().required(),
    message: Yup.string().min(10).max(500).required(),
    inquiryType: Yup.string().required(),
    howDidYouHearAboutUs: Yup.string().required(),
};

function BookForm() {
    return (
        <div className='book-form p-3 md:p-5 lg:p-7 rounded-xl border border-grey-color-15'>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object(validationSchema)}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        {/* Content Grid */}
                        <div className='content-grid grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5'>
                            {/* Inputs */}
                            {[].map((input, index) => <></>)}
                            {/* Selects */}
                            {[].map((input, index) => <></>)}
                            {/* Textarea */}
                            <div className='sm:col-span-2 md:col-span-3'>
                                {/* Label */}
                                <label htmlFor={'message'}>Message</label>
                                {/* Input */}
                                <textarea
                                    id='message'
                                    name='message'
                                    style={{
                                        resize: 'none'
                                    }}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='Enter Your Message'
                                    className='w-full focus:outline-none rounded-md p-2 bg-grey-color-10 border border-grey-color-15 mt-2 h-[140px]'
                                >
                                </textarea>
                                {/* Error Message */}
                                <ErrorMessage name={'message'} component={'div'} className='text-red-500 mt-2' />
                            </div>
                        </div>
                        {/* Submit Container */}
                        <div className='submit-container flex items-center justify-between gap-3'>
                            {/* Submit Condition */}
                            <div className='submit-condition-container flex items-center gap-2'>
                                {/* Checkbox Input */}
                                <input
                                    id='submit-condition'
                                    name='submit-condition'
                                    type='checkbox'
                                    className='peer hidden'
                                />
                                {/* Checkbox- */}
                                <label htmlFor='submit-condition' className='w-6 h-6 cursor-pointer text-sm flex items-center justify-center rounded-md border border-grey-color-15 *:scale-0 *:rotate-90 peer-checked:*:scale-100 peer-checked:*:rotate-0 peer-checked:border-purple-color-60 transition'>
                                    <i className="fa-solid fa-check transition text-purple-color-60"></i>
                                </label>
                                <label htmlFor='submit-condition' className='text-grey-color-60 cursor-pointer sm:hover:text-white peer-checked:text-white select-none transition'>I agree with Terms of Use and Privacy Policy</label>
                            </div>
                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className='py-2 px-4 rounded-md bg-purple-color-60'
                            >
                                Send Your MEssage
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default BookForm;