import React from 'react';
import Landing from '../../Components/Contact_Components/Landing/Landing';
import FilterProperties from '../../Components/Properties_Components/FilterProperties/FilterProperties';
import BookProperty from '../../Components/Properties_Components/BookProperty/BookProperty';
import DiscoverProperties from '../../Components/Properties_Components/DiscoverProperties/DiscoverProperties';

function Properties() {
    return (
        <div className='properties-page'>
            {/* Landing */}
            <Landing />
            {/* Filter Properties */}
            <FilterProperties />
            {/* Discover Properties */}
            <DiscoverProperties />
            {/*  */}
            {/* BookProperty */}
            <BookProperty />
        </div>
    )
}

export default Properties;