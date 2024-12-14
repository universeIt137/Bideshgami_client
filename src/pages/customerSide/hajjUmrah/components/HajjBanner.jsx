import React from 'react';
import banner from '../../../../assets/hajjUmrahPage/hajjBanner.png';

const HajjBanner = () => {
    return (
        <div>
            {/* banner */}
            <div className="w-full h-[240px] relative">
                <img className="w-full h-full object-cover" src={banner} alt="Hajj Banner" />
                <div className="absolute w-full h-full bg-black/50 flex justify-center items-center top-0">
                    <p className="text-white text-center text-3xl font-bold">December Umrah Package - 14 Days</p>
                </div>
            </div>
        </div>
    );
};

export default HajjBanner;
