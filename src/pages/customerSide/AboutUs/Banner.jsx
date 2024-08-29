import React from 'react';
import banner from '../../../assets/detailsPage/banner.jpeg'
const Banner = () => {
    const text = "Our organization has been in the market for 7 years. It is the founder of the official tourist pass of Yerevan – Yerevan Card and the travel agency “Jan Armenia tours and travel”. Jan Armenia tours and travel is the only travel company in Armenia offering everyday group gastronomic tours. Over a 7-year period it is seen that travel industry is more than dealings. What it involves is building strong and long-term relations based on trust, understanding the needs of the client and business partners. We have extensive experience in organizing business trips, meetings and conferences. For 7 years, Jan Armenia Tours and Travel has implemented many unique ideas, created the best routes for you and accompanied you to places that only locals know about. The variety of tours and services we offer makes us one of the best travel companies in the region. If you want to be part of a group, join our cultural and gastronomic group tours, otherwise, purchase a private tour with an experienced guide or travel without a guide with highly qualified, multilingual drivers. Our modern vehicles are equipped with air conditioning and Wi-Fi. Book travel services from Jan Armenia Tours and Travel - take fantastic memories with you! See Media Kit and Travel brochure here.";
    return (
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
                <p className='pt-10 px-10'>
                    ${text}
                </p>
            </section>
        </div>
    );
};

export default Banner;