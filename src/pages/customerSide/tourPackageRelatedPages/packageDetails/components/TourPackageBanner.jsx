import React from 'react';

const TourPackageBanner = () => {
    const banner = "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734434492/Bideshgami/Public/vl2jfcyc9uh76rv9ulbv.png"
    return (
        <div>
            {/* banner */}
            <div className="w-full h-[240px] relative">
                <img className="w-full h-full object-cover" src={banner} alt="Hajj Banner" />
                <div className="absolute w-full h-full bg-black/50 flex justify-center items-center top-0">
                    <p className="text-white text-center text-5xl font-bold">Tour Package - 03 Days</p>
                </div>
            </div>
        </div>
    );
};

export default TourPackageBanner;
