import React from 'react';
import Landing from '../../Components/Contact_Components/Landing/Landing';
import FilterProperties from '../../Components/Properties_Components/FilterProperties/FilterProperties';
import BookProperty from '../../Components/Properties_Components/BookProperty/BookProperty';

function Properties() {
    return (
        <div className='properties-page'>
            {/* Landing */}
            <Landing />
            {/* Filter Properties */}
            <FilterProperties />
            {/* BookProperty */}
            <BookProperty />
        </div>
    )
}

export default Properties;