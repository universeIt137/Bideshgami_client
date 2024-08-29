import React from 'react';
import banner from '../../../assets/detailsPage/banner.jpeg'
const ServiceBanner = () => {
    
    return (
        <>
              <div>
            {/* banner  */}
            <div className="w-full h-[140px] relative">
                <img className='w-full h-full object-cover' src={banner} alt="" />
                <div className='absolute w-full h-full bg-black/50 flex justify-center items-center top-0'>
                    <p className='text-5xl font-bold text-white'>About Us</p>
                </div>
            </div>
            <section className="container mx-auto pt-12">
                <div className="flex gap-8 w-10/12 mx-auto">
                    <div className="">
                        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1724664990/Bideshgami%20images/About%20Us/vuh1q0cj8kcgemyqlcjk.png" alt="" />
                    </div>
                    <div className="">
                        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1724664990/Bideshgami%20images/About%20Us/hnxjw3ro9els1i2lj36v.png" alt="" />
                    </div>
                </div>
                
            </section>
        </div>
        </>
    );
};

export default ServiceBanner;