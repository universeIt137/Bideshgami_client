import banner from '../../../assets/detailsPage/banner.jpeg'
const AboutUs = () => {
    return (
        <div>
            {/* banner  */}
            <div className="w-full h-[140px] relative">
                <img className='w-full h-full object-cover' src={banner} alt="" />
                <div className='absolute w-full h-full bg-black/50 flex justify-center items-center top-0'>
                <p className='text-5xl font-bold text-white'>About Us</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;