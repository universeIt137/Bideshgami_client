import React from 'react';
import TourBanner from '../components/TourBanner';
import CustomizeTourForm from './CustomizeTourForm';

const CustomizedTour = () => {
    return (
        <>
            <div className="mb-10">
                <TourBanner></TourBanner>
            </div>
            <div className="">
                <CustomizeTourForm></CustomizeTourForm>
            </div>
            
        </>
    );
};

export default CustomizedTour;