import React from 'react';
import ServiceBanner from './ServiceBanner';
import ServiceDetailsSection from './ServiceDetailsSection';

const ServicePage = () => {
    return (
        <div>
            <ServiceBanner></ServiceBanner>
            <ServiceDetailsSection></ServiceDetailsSection>
        </div>
    );
};

export default ServicePage;