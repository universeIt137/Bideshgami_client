import React from 'react';
import TourPackageBanner from './components/TourPackageBanner';
import HajjDetailsSection from '../../hajjUmrah/components/HajjDetailsSection';
import TourPackageDescription from './components/TourPackageDescription';
import HajjAddSection from '../../hajjUmrah/components/HajjAddSection';

const TourPackageDetails = () => {
    return (
        <div >
            <TourPackageBanner></TourPackageBanner>
            <div className="w-10/12 mx-auto">
                <TourPackageDescription></TourPackageDescription>
                <HajjAddSection></HajjAddSection>
            </div>
        </div>
    );
};

export default TourPackageDetails;