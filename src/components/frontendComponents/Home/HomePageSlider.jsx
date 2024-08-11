/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';
const HomePageSlider = ({ sliderImg }) => {
    return (

        <div className='max-h-[200px] w-full max-w-[575px] mx-auto rounded-lg overflow-hidden'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
    
                scrollbar={{
                    hide: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                speed={500}
                modules={[Autoplay, Scrollbar]}
            >
                {
                    sliderImg?.map((img, idx) => <SwiperSlide className='w-full max-h-[200px] flex justify-center items-center' key={idx} >
                        <img src={img} alt="" className='w-full h-full object-cover'  />
                    </SwiperSlide>)
                }
    
            </Swiper>
        </div>

    );
};

export default HomePageSlider;