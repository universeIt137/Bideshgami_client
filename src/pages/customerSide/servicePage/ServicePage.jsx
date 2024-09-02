import React from 'react';
import ServiceBanner from './ServiceBanner';
import ServiceDetailsSection from './ServiceDetailsSection';
import AddSection from './AddSection';
import FooterBanner from './FooterBanner';



const ServicePage = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <ServiceBanner></ServiceBanner>
            <ServiceDetailsSection></ServiceDetailsSection>
            <AddSection></AddSection>
            <FooterBanner></FooterBanner>
        </div>
    );
};

export default ServicePage;