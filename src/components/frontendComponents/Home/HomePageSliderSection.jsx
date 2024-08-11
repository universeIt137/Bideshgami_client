import sliderImg1 from '../../../assets/Home/slider1.png'
import sliderImg2 from '../../../assets/Home/slider2.jpeg'
import HomePageSlider from './HomePageSlider';
const HomePageSliderSection = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 py-10 max-w-7xl mx-auto'>
            <HomePageSlider key={'slider1'} sliderImg={[sliderImg1, sliderImg2, sliderImg1, sliderImg2, sliderImg1, sliderImg2]} />
            <HomePageSlider key={'slider2'} sliderImg={[sliderImg2, sliderImg1, sliderImg2, sliderImg1, sliderImg2, sliderImg1]} />
            {/* <HomePageSlider/> */}
        </div>
    );
};

export default HomePageSliderSection;