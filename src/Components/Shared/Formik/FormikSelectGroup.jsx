import { ErrorMessage } from 'formik';
import React from 'react';

function FormikSelectGroup({ label, options, ...selectAttributesData }) {
    return (
        <div className='formik-input-group'>
            {/* Label */}
            <label htmlFor={selectAttributesData.id}>{label}</label>
            {/* Input */}
            <select
                {...selectAttributesData}
                className='w-full focus:outline-none rounded-md p-2 bg-grey-color-10 border border-grey-color-15 mt-2'
            >
                {options.map((option, index) => <option
                    key={index}
                    value={option.value}
                >
                    {option.text}
                </option>)}
            </select>
            {/* Error Message */}
            <ErrorMessage name={selectAttributesData.name} component={'div'} className='text-red-500 mt-2' />
        </div>
    )
}

export default FormikSelectGroup;