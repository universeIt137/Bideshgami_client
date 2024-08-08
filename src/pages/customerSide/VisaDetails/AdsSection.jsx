import { useState } from 'react';
import banner from '../../../assets/detailsPage/banner.jpeg';
import banner2 from '../../../assets/detailsPage/banner2.jpeg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import 'swiper/swiper-bundle.css'; // Make sure you import the Swiper CSS

const AdsSection = () => {
    const adsArray = [
        {
            img: banner,
            title: 'Italy Work Permit',
            subtitle: 'Bideshgami Work Permit Visa',
            price: 15000
        },
        {
            img: banner2,
            title: 'Chicago Work Permit',
            subtitle: 'Bideshgami Work Permit Visa',
            price: 13000
        },
        {
            img: banner,
            title: 'Italy Work Permit',
            subtitle: 'Bideshgami Work Permit Visa',
            price: 15000
        },
    ];

    const adsArray2Point0 = [...adsArray, ...adsArray, ...adsArray, ...adsArray, ...adsArray];

    const totalAdds = adsArray2Point0?.length;

    const paginationArray = Array.from({ length: totalAdds }, (_, i) => i);

    return (
        <div className='relative'>

            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Pagination, Navigation]}
            >
                {paginationArray?.map((page, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {adsArray2Point0?.slice(page, page + 4)?.map((ad, idx) => (
                                <div key={idx} className='bg-primary/10 flex w-full'>
                                    <img className='w-[40%] max-w-[104px] sm:w-[104px] h-full min-h-[84px] object-cover' src={ad?.img} alt="" />
                                    <div className='text-sm font-medium px-3 py-1'>
                                        <h3 className=''>{ad?.title}</h3>
                                        <p className='text-[7px]'>{ad?.subtitle}</p>
                                        <h2 className='text-primary font-bold'>{ad?.price} BDT</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='flex justify-between items-center'>
                <div className="swiper-button-prev-custom text-3xl p-1 cursor-pointer text-primary "><GrFormPrevious /></div>
                <div className="custom-pagination ml-12"></div>
                <div className="swiper-button-next-custom text-3xl p-1 cursor-pointer text-primary"><GrFormNext /></div>
            </div>
        </div>
    );
};

export default AdsSection;
