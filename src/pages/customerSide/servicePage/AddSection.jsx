
import AddCard from './AddCard';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const adds = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725084821/Bideshgami%20images/Service%20Details/vqelbqkx47squmllpam8.png",
        logo: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725080407/Bideshgami%20images/Service%20Details/icons/ogiuilq29xkhgxgvavnd.png",
        role: "MEMBER",
        account_type: "VERIFIED ACCOUNT",
        visa_type: "Bideshgami Work Permit Visa",
        price: "15,000 BDT",
        timeStamp: "4 days"
    }
]

const AddSection = () => {
    return (
        <>

            <div className='border container mx-auto mb-10 '>
                <div className=" border-b-2 w-11/12 mx-auto">
                    <p className='p-10 text-2xl text-gray-500 '>Similar Ads</p>
                </div>

                <Swiper
                   pagination={true} modules={[Pagination, Navigation]} className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="grid lg:grid-cols-2 gap-10 p-10">
                            <AddCard></AddCard>
                            <AddCard></AddCard>
                            <AddCard></AddCard>
                            <AddCard></AddCard>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="grid lg:grid-cols-2 gap-10 p-10">
                            <AddCard></AddCard>
                            <AddCard></AddCard>
                            <AddCard></AddCard>
                            <AddCard></AddCard>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="grid lg:grid-cols-2 gap-10 p-10">
                            <AddCard></AddCard>
                            <AddCard></AddCard>
                            <AddCard></AddCard>
                            <AddCard></AddCard>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className="border-b-2 my-5 h-5 w-11/12 mx-auto"></div>
                <p className='text-primary text-end px-10'>See all ads from this member</p>
            </div>
            
        </>
    );
};

export default AddSection;