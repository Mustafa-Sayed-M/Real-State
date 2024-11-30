import React from 'react';
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';
import PropertyCard from './PropertyCard';

function PropertiesSlider({ propertiesList }) {
    return (
        <Swiper
            spaceBetween={15}
            breakpoints={{
                640: { slidesPerView: 2 },
                991: { slidesPerView: 3 }
            }}
        >
            {propertiesList.map((property, index) => <SwiperSlide key={index}>
                <PropertyCard propertyData={property} />
            </SwiperSlide>)}
        </Swiper>
    )
}

export default PropertiesSlider;