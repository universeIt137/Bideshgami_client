import React from 'react';
import ServiceBanner from './ServiceBanner';
import ServiceDetailsSection from './ServiceDetailsSection';
import AddSection from './AddSection';

const ServicePage = () => {
    return (
        <div>
            <ServiceBanner></ServiceBanner>
            <ServiceDetailsSection></ServiceDetailsSection>
            <AddSection></AddSection>
        </div>
    );
};

export default ServicePage;