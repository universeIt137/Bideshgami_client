
import Container from '../../../shared/Container';
import Banner from './Banner';
import Client from './Client';
import Mission from './Mission';
const AboutUs = () => {
    window.scrollTo(0, 0);
    return (
        <div className='pb-16'>
            <Banner />
            <Container>
                <Mission />
                <Client/>
            </Container>
        </div>
    );
};

export default AboutUs;