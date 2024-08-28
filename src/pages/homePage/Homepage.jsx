import React from 'react';
import WorkSection from '../../components/frontendComponents/Home/WorkSection';
import HeroSection from '../../components/frontendComponents/Home/HeroSection';



const Homepage = () => {
  return (
    <>
      <HeroSection />
      <div className="mb-10">
        <WorkSection />
      </div>
    </>
  );
};

export default Homepage;