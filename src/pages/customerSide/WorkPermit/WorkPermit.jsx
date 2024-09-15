import GlobalBanner from "../../../shared/GlobalBanner";
import BannerImg from '../../../assets/detailsPage/banner.jpeg'
import Container from "../../../shared/Container";
const WorkPermit = () => {
    return (
        <>
            <Container>
                <div className="py-5 space-y-5">
                    <GlobalBanner img={BannerImg} />
                </div>
            </Container>

        </>
    );
};

export default WorkPermit;