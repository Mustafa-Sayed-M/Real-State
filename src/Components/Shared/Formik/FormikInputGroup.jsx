import { ErrorMessage } from 'formik';
import React from 'react';

function FormikInputGroup({ label, className, ...inputAttributesData }) {
    return (
        <div className={`formik-input-group ${className}`}>
            {/* Label */}
            <label htmlFor={inputAttributesData.id}>{label}</label>
            {/* Input */}
            <input
                {...inputAttributesData}
                className='w-full focus:outline-none rounded-md p-2 bg-grey-color-10 border border-grey-color-15 mt-2'
            />
            {/* Error Message */}
            <ErrorMessage name={inputAttributesData.name} component={'div'} className='text-red-500 mt-2' />
        </div>
    )
}

export default FormikInputGroup;