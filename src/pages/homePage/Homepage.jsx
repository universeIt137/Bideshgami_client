import React from 'react';
import WorkSection from '../../components/frontendComponents/Home/WorkSection';
import HeroSection from '../../components/frontendComponents/Home/HeroSection';



const Homepage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <HeroSection />
      <div className="mb-16">
        <WorkSection />
      </div>
    </>
  );
};

export default Homepage;