import React from 'react';
import HajjBanner from './components/HajjBanner';
import HajjDetailsSection from './components/HajjDetailsSection';
import HajjAddSection from './components/HajjAddSection';

const HajjUmrahDetails = () => {
    return (
        <div >
            <HajjBanner></HajjBanner>
            <div className="w-10/12 mx-auto">
                <HajjDetailsSection></HajjDetailsSection>
                <HajjAddSection></HajjAddSection>
            </div>
        </div>
    );
};

export default HajjUmrahDetails;