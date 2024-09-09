/* eslint-disable react/prop-types */
import banner from '../../../assets/detailsPage/banner.jpeg'
import Container from '../../../shared/Container';
import img1 from '../../../assets/aboutUs/img1.jpeg'
import img2 from '../../../assets/aboutUs/img2.jpeg'
import img3 from '../../../assets/aboutUs/img3.jpeg'
const AboutUs = () => {

    const Title = ({ text }) => <div className='flex justify-center items-center'>
       <h2 className='text-[40px] font-semibold text-[#0066ff] text-center border-b-2 border-black w-max px-2 leading-tight'> {text}</h2>
    </div>
    return (
        <div>
            {/* banner  */}
            <div className="w-full h-[140px] relative">
                <img className='w-full h-full object-cover' src={banner} alt="" />
                <div className='absolute w-full h-full bg-black/50 flex justify-center items-center top-0'>
                    <p className='text-5xl font-bold text-white'>About Us</p>
                </div>
            </div>

            <div className='bg-white'>
                <Container>
                    <div className='space-y-10 py-10 px-10'>
                        <div className='grid grid-cols-2 gap-7'>
                            <img className='w-full object-cover max-h-[407px]' src={img1} alt="" />
                            <img className='w-full object-cover h-full max-h-[407px]' src={img2} alt="" />
                        </div>
                        <p className=''>
                            Our organization has been in the market for 7 years. It is the founder of the official tourist pass of Yerevan – Yerevan Card and the travel agency “Jan Armenia tours and travel”. Jan Armenia tours and travel is the only travel company in Armenia offering everyday group gastronomic tours. Over a 7-year period it is seen that travel industry is more than dealings. What it involves is building strong and long-term relations based on trust, understanding the needs of the client and business partners. We have extensive experience in organizing business trips, meetings and conferences. For 7 years, Jan Armenia Tours and Travel has implemented many unique ideas, created the best routes for you and accompanied you to places that only locals know about. The variety of tours and services we offer makes us one of the best travel companies in the region. If you want to be part of a group, join our cultural and gastronomic group tours, otherwise, purchase a private tour with an experienced guide or travel without a guide with highly qualified, multilingual drivers. Our modern vehicles are equipped with air conditioning and Wi-Fi. Book travel services from Jan Armenia Tours and Travel - take fantastic memories with you! See Media Kit and Travel brochure here.
                        </p>
                        <div className='space-y-5'>
                            <Title text={'OUR MISSION'} />
                            <p>Provide available and high-quality service to the clients to meet their expectations and present them ultimate experience from the tours and business meetings. We are thankful to our clients and partners for their commitment and we cherish dearly.</p>
                            <img className='max-h-[529px] object-cover w-full' src={img3} alt="" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default AboutUs;