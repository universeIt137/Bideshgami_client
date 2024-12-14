import React from 'react';
import HeroSection from '../../../components/frontendComponents/Home/HeroSection';
import HajjHero from './components/HajjHero';
import HajjCards from './components/HajjCards';

const HajjUmrah = () => {
    return (
        <div className='mb-10'>
            <div className="">
                <HajjHero></HajjHero>
            </div>

            <div className="w-10/12 mx-auto px-4 py-2 rounded-xl text-white mt-40 lg:mt-32 bg-[#0066ff] lg:flex justify-between ">
                <div className="flex flex-col lg:flex-row items-center lg:gap-4">
                    <img src="https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734159246/Bideshgami/Public/c7dlk3l7l8h3w9z7hqed.png" alt="" />
                    <p className='text-xs lg:text-xl font-bold'>২০২৫ সালের হজ্জ রেজিস্ট্রেশন করতে</p>
                </div>
                <div className='bg-white flex justify-center items-center lg:px-10 rounded-2xl'>
                    <p className="text-primary lg:text-2xl font-bold">আবেদন করুন</p>
                </div>
            </div>
            <div className="">
                <HajjCards></HajjCards>
            </div>
        </div>
    );
};

export default HajjUmrah;