import GlobalBanner from "../../../shared/GlobalBanner";
import BannerImg from '../../../assets/detailsPage/banner.jpeg'
import Container from "../../../shared/Container";
import image from '../../../assets/detailsPage/image1.jpeg'
import warning from '../../../assets/detailsPage/scamImg.png'
import { TbEyeFilled } from "react-icons/tb";
import { FaChevronDown, FaRegHeart } from "react-icons/fa";
import { HiOutlineChat } from "react-icons/hi";
import { useState } from "react";
import AddSection from "../servicePage/AddSection";
import { Link } from "react-router-dom";
const WorkPermit = () => {
    const [seeMore, setSeeMore] = useState(false)
    const workPermitDetails = [
        { label: "Country Name", value: "Romania" },
        { label: "Type of Visa", value: "Work Permit" },
        { label: "Type of Work", value: "Plumber" },
        { label: "Company name", value: "xyz company" },
        { label: "Working hours", value: "10 hours" },
        { label: "Processing time", value: "2 month" },
        { label: "Age", value: "21-40" },
        { label: "Iqama cost", value: "Self/company" },
        { label: "Education", value: "No need/ PSC/ JSC/ SSC/ HSC/ HONORS/ DEGREE/ MASTERS" },
        { label: "Document", value: "Tenure of job: 3 Month/ 6 month/ 1 Year/ 2 Year/ 3 Year/ 4 Year/ 5 Year" },
        { label: "Living cost", value: "self/company" },
        { label: "Meal cost", value: "self/company" },
        { label: "Gender", value: "male/ female/ male-female both" },
        { label: "Package included", value: "air-ticket-visa fee- processing fee- BMET" },
        { label: "Payment system", value: "After visa/ advance payment 50,000 BDT After visa 3,00,000 BDT" },
        { label: "Documents", value: "Passport- photo- police clearance- medical fit certificate" },
        { label: "Experience", value: "No need/3 month-1 year/1 year-2 year/1 year-3 year/1 year-4 year/1 year-5 year" },
        { label: "Application deadline", value: "Date" }
    ];
    return (
        <>
            <Container>
                <div className="py-5 space-y-5">
                    <GlobalBanner img={BannerImg} />
                    <div className="border-2 border-gray-400">
                        <div className="sm:p-3  w-full grid grid-cols-1 md:grid-cols-2">
                            <div className="space-y-5 p-5">
                                <div>
                                    <h2 className="text-xl sm:text-3xl font-semibold">Work Permit Visa in Romania</h2>
                                    <p className="text-sm sm:text-base">Posted on 01 Jul 12:19 pm</p>
                                </div>
                                <div>
                                    <img src={image} alt="" />
                                </div>
                                <div className="p-3 px-5 lg:px-10 rounded-lg border-2 border-primary">
                                    <div className="flex flex-col justify-center items-center gap-3 px-2 lg:px-5">
                                        <img className="w-16" src={warning} alt="" />
                                        <h4 className="text-lg font-medium">Stay Alert: Avoid Online Scams</h4>
                                        <p className="text-xs text-gray-600">Never share card details or OTPs, and always verify items in person before
                                            payment. Bikroy does not offer a delivery service. Stay vigilant!</p>
                                    </div>
                                    <div className="py-3 text-end">
                                        <Link to={'/safety-tips'}><button className="text-primary text-sm sm:text-base">See all safety tips</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="py-7 px-2 sm:px-5">
                                <div className="flex flex-wrap justify-center items-center gap-5 text-sm sm:text-base">
                                    <div className="flex items-center gap-1 bg-primary/10 w-max px-2 rounded h-[30px]"><TbEyeFilled className="text-primary text-lg" /> 205 Total Apply</div>
                                    <div className="flex items-center gap-1 bg-[#FFF0F0] w-max px-2 rounded h-[26px]"><FaRegHeart className="text-pink-300 text-lg" /> 109</div>
                                    <div className="flex items-center gap-1 bg-primary/10 w-max px-2 rounded h-[26px]"><FaRegHeart className="text-primary text-lg" /></div>
                                    <div className="flex items-center gap-1 bg-primary/10 w-max px-2 rounded h-[26px]"><FaRegHeart className="text-primary text-lg" /></div>
                                </div>

                                <div className="grid grid-cols-2 max-w-[450px] mx-auto gap-5 mt-10">
                                    <Link to={'/apply-form'}><button className="w-full  h-8 rounded-lg text-white bg-primary font-semibold">Apply Now</button></Link>
                                    <button className="flex w-full h-8 rounded-lg text-white bg-primary font-semibold items-center justify-center gap-2"><HiOutlineChat className="text-lg" /> Chat</button>
                                </div>
                                <div className="mt-10 space-y-2">
                                    <h2 className="text-2xl sm:text-4xl font-bold">Work Permit Visa in Romania</h2>
                                    <p className="font-medium">Work Permt Visa </p>
                                    <h3 className="text-primary font-bold text-lg sm:text-2xl">BDT 70,000</h3>
                                    <p className="text-sm font-semibold">Post By Verified Account</p>


                                    <div className="space-y-3">
                                        {workPermitDetails.map((detail, index) => (
                                            <div key={index} className="flex gap-1 sm:gap-2 text-sm sm:text-base">
                                                <p className=" min-w-[100px] max-w-[100px] sm:min-w-[160px] sm:max-w-[160px]  font-bold">{detail.label}</p>
                                                <p>:</p>
                                                <p className="font-medium">{detail.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="px-5 pb-5 text-sm">
                            <h2 className=" font-medium">Description</h2>
                            <p className="pt-5 text-gray-600 text-justify">However, as the workaround description implies, this separate tracking carries the risk of someone still being served the same ad even after the limit has been exceeded.
                                Nurses found that working safely isn’t only about PPE and sanitation, but also a much broader range of practices, from using technology in new ways to changing job descriptions Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Later this year, developers will be required to include information in a so-called “nutrition label” about how their apps collect data on their app description page.Baby cigarette “No worry of cancer with this cigarette costume,” the description for this gem reads.However, as the workaround description implies, this separate tracking carries the risk of someone still being served the same ad even after the limit has been exceeded.
                                Nurses found that working safely isn’t only about PPE and sanitation, but also a much broader range of practices, from using technology in new ways to </p>
                        </div>
                        <div className="px-5 pb-5 ">
                            <div className='text-end px-3'>
                                <div onClick={() => setSeeMore(!seeMore)} className=" hover:border-primary border-none hover:border text-primary py-2 px-4 rounded hover:bg-primary/10 w-max flex items-center gap-2 ml-auto cursor-pointer">
                                    Flight Details <p className={`${seeMore ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}><FaChevronDown /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AddSection></AddSection>
                </div>
            </Container>

        </>
    );
};

export default WorkPermit;