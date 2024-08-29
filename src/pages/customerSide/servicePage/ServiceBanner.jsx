import React from 'react';
import banner from '../../../assets/detailsPage/banner.jpeg'
const ServiceBanner = () => {
    
    return (
        <>
              <div>
            {/* banner  */}
            <div className="w-full h-[240px] relative">
                <img className='w-full h-full object-cover' src={banner} alt="" />
                <div className='absolute w-full h-full bg-black/50 flex justify-center items-center top-0'>
                    
                </div>
            </div>
            
        </div>
        </>
    );
};

export default ServiceBanner;