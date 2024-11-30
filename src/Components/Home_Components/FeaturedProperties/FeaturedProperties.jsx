import React from 'react';
import HeadSection from '../../Shared/HeadSection';
import properties from '../../../Data/properties.json';
import PropertiesSlider from '../../Shared/PropertiesSlider';
import 'swiper/css';

function FeaturedProperties() {

    const [featuredProperties, setFeaturedProperties] = React.useState([]);

    React.useEffect(() => {
        setFeaturedProperties(properties.filter(property => property.featured));
    }, []);

    return (
        <section className='featured-properties py-7' id='featured-properties'>
            <div className='container'>
                {/* Header Section */}
                <HeadSection
                    title={'Featured Properties'}
                    description={'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'}
                    link={{
                        to: '/properties',
                        text: 'View All Properties'
                    }}
                />
                {/* Features Properties Slider Container */}
                <div className='features-properties-slider-container'>
                    <PropertiesSlider propertiesList={featuredProperties} />
                </div>
            </div>
        </section>
    )
}

export default FeaturedProperties;