import React from 'react';
import HeadSection from '../../Shared/HeadSection';
import PropertiesSlider from '../../Shared/PropertiesSlider';
import propertiesData from '../../../Data/properties.json';
import { useSearchParams } from 'react-router-dom';

function DiscoverProperties() {
    const [searchParams] = useSearchParams();
    const [propertiesFiltered, setPropertiesFiltered] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    // Get search parameters:
    const locationParam = searchParams.get('location');
    const propertyTypeParam = searchParams.get('propertyType');
    const priceRangeParam = searchParams.get('priceRange');
    const propertySizeParam = searchParams.get('propertySize');
    const buildYearParam = searchParams.get('buildYear');

    // Use Effect:
    React.useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => {
            const filteredProperties = propertiesData.filter(property => {
                return (
                    (!locationParam || property.location === locationParam) &&
                    (!propertyTypeParam || property.type === propertyTypeParam) &&
                    (!priceRangeParam || property.price === priceRangeParam) &&
                    (!propertySizeParam || property.size === propertySizeParam) &&
                    (!buildYearParam || property.buildYear === buildYearParam)
                );
            });
            setPropertiesFiltered(filteredProperties);
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [buildYearParam, locationParam, priceRangeParam, propertySizeParam, propertyTypeParam]);

    return (
        <section className='discover-properties py-7' id=''>
            <div className='container'>
                {/* Header Section */}
                <HeadSection
                    title={'Discover a World of Possibilities'}
                    description={'Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home'}
                />
                {/* Properties */}
                {isLoading ? (
                    <div className='loading-spinner text-center py-5'>
                        <span>Loading properties...</span>
                    </div>
                ) : propertiesFiltered.length === 0 ? (
                    <div className='text-center py-5'>
                        <span>No properties match this data 💔</span>
                    </div>
                ) : (
                    <div className='features-properties-slider-container'>
                        <PropertiesSlider propertiesList={propertiesFiltered} />
                    </div>
                )}
            </div>
        </section>
    );
}

export default DiscoverProperties;