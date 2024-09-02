import React from 'react';

const RefundBanner = () => {
    return (
        <div>
            <div className="w-full h-[200px] lg:h-[440px] relative">
                <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725272262/Bideshgami%20images/Refund%20Policy/ta8pdn09c4zhsmdfobg7.jpg" alt="" />
                <div className="absolute w-full h-full bg-black/40 flex justify-center  top-0">
                    <p className="text-4xl lg:text-7xl font-bold text-white mt-20 text-center">Refund Policy</p>
                </div>
            </div>
        </div>
    );
};

export default RefundBanner;