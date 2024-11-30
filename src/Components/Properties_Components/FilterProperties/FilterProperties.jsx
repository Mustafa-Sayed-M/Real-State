import React from 'react';
import FilterSearchForm from './Components/FilterSearchForm';
import FilterSelect from './Components/FilterSelect';

function FilterProperties() {
    return (
        <div className='filter-properties -translate-y-1/4'>
            <div className='container'>
                {/* Filter Search */}
                <div className='filter-search px-5'>
                    {/* Filter Search Form */}
                    <FilterSearchForm />
                </div>
                {/* Filter Select */}
                <FilterSelect />
            </div>
        </div>
    )
}

export default FilterProperties;