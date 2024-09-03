import React from 'react';
import AirTicketBanner from './AirTicketBanner';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const AirTicket = () => {
    return (
        <div>
            <div className="">
            <AirTicketBanner></AirTicketBanner>
            </div>

            

            {/* Slider section  */}
            <div className="lg:mt-80 mt-[780px] container mx-auto  flex justify-center">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725356179/Bideshgami%20images/Air%20Ticket/cceifsebv6zcxpt30liq.png" alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex justify-center">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725356179/Bideshgami%20images/Air%20Ticket/cceifsebv6zcxpt30liq.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725356179/Bideshgami%20images/Air%20Ticket/cceifsebv6zcxpt30liq.png" alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex justify-center">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725356179/Bideshgami%20images/Air%20Ticket/cceifsebv6zcxpt30liq.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725356179/Bideshgami%20images/Air%20Ticket/cceifsebv6zcxpt30liq.png" alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex justify-center">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725356179/Bideshgami%20images/Air%20Ticket/cceifsebv6zcxpt30liq.png" alt="" />
                        </div>
                    </SwiperSlide>

                </Swiper>


            </div>

            <div className="container mx-auto">
                <p className='lg:text-4xl text-center lg:text-start font-bold my-5'>Explore unique <span className='text-primary'>Places to stay</span></p>
            </div>

            <div className="bg-primary mb-5">
                <div className="container mx-auto text-white p-14">
                    <h2 className='text-3xl '>Seamless travel made easy</h2>
                    <div className="lg:w-1/3">
                        <p className='text-[14px] font-light py-5'>
                            Book and manage flights on the go. Jet off on exclusive
                            fares. Enjoy unlimited access to digital content. Travel
                            seamlessly with the flightexpert.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AirTicket;