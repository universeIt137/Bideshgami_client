import React from 'react';

const TermBanner = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <div className="w-full h-[340px] relative">
                <img className="w-full h-full object-cover" src={`https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725337725/Bideshgami%20images/Term%20and%20Conditions/u1v4ecthdndmpqpuh1rz.jpg`} alt="" />
                <div className="absolute w-full h-full bg-black/60 flex flex-col items-center justify-center pt-10 top-0 text-white lg:space-y-5 text-center">
                    <p className="text-5xl font-bold ">Terms & Conditions</p>
                    <p>Innovative Mobile and Web Travel Products Suit that allows TMC's and</p>
                    <p className='text-xl'>Travel Agencies to intract with their Customers throughout their journey.</p>
                </div>
            </div>
        </>
    );
};

export default TermBanner;