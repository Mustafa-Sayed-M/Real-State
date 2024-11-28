import React from 'react';
import Faq from '../../Components/Global/Faq/Faq';
import { useParams } from 'react-router-dom';
import properties from '../../Data/properties.json';

function PropertyDetail() {

    const { propertyId } = useParams();

    const [propertyData, setPropertyData] = React.useState({});;

    React.useEffect(() => {
        setPropertyData({});
    }, [propertyId]);

    return (
        <div className={`property-detail-${propertyId}`}>
            {/* Faq */}
            <Faq />
        </div>
    )
}

export default PropertyDetail;