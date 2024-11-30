import React from 'react';
import filterPropertiesData from '../../../../Data/filterPropertiesSelects.json';
import { useSearchParams } from 'react-router-dom';

const FilterSelectGroup = ({ options, fontAwesomeIconClass, ...selectAttributes }) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const selectRef = React.useRef(null);

    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (e) => {
        const value = e.target.value;
        const newParams = new URLSearchParams(searchParams);
        if (value) {
            newParams.set(e.target.name, e.target.value);
        } else {
            newParams.delete(e.target.name);
        }
        setSearchParams(newParams);
    };

    return (
        <div className='filter-select-group relative text-grey-color-60'>
            {/* Dynamic Icon */}
            <button
                type='button'
                className={`absolute left-2 top-1/2 -translate-y-1/2 transition ${isOpen && 'text-purple-color-60'}`}
            >
                <i className={`fa-solid fa-${fontAwesomeIconClass} fa-fw`}></i>
            </button>
            {/* Select */}
            <select
                ref={selectRef}
                {...selectAttributes}
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setIsOpen(false)}
                onChange={handleChange}
                className='bg-grey-color-8 border border-grey-color-15 rounded-md focus:outline-none pl-8 py-3 pr-10 w-full cursor-pointer peer appearance-none'
            >
                {options.map((option, index) => <option key={index} value={option.value}>
                    {option.text}
                </option>)}
            </select>
            {/* Arrow */}
            <button
                type='button'
                className={`w-7 h-7 leading-7 text-center rounded-full bg-grey-color-10 absolute top-1/2 -translate-y-1/2 right-2 transition ${isOpen ? 'rotate-180 bg-purple-color-60 text-white' : ''
                    }`}
            >
                <i className="fa-solid fa-angle-down fa-fw"></i>
            </button>
        </div>
    )
};

function FilterSelect() {
    return (
        <div className='filter-select rounded-md bg-grey-color-10 p-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
            {filterPropertiesData.map((filterPropertiesData, index) => <FilterSelectGroup key={index} {...filterPropertiesData} />)}
        </div>
    )
}

export default FilterSelect;