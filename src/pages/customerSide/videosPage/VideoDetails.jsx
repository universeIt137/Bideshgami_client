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
const VideoDetails = () => {
    const [seeMore, setSeeMore] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChatClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const workPermitDetails = [
        { label: "Country Name", value: "Romania" },
        { label: "Type of Visa", value: "Work Permit" },
        { label: "Type of Work", value: "Plumber" },
        { label: "Company name", value: "xyz company" },
        { label: "Working hours", value: "10 hours" },
        { label: "Processing time", value: "2 month" },
        { label: "Age", value: "21-40" },
        { label: "Iqama cost", value: "Self/company" },
        { label: "Education", value: "No need/ PSC/ JSC/ SSC/ HSC/ HONORS/ DEGREE" },
        { label: "Document", value: "Tenure of job: 3 Month/ 6 month/ 1 Year/ 2 Year/ 3 Year" },
        { label: "Living cost", value: "self/company" },
        { label: "Meal cost", value: "self/company" },
        { label: "Gender", value: "male/ female/ male-female both" },
        { label: "Package included", value: "air-ticket-visa fee- processing fee- BMET" },
        { label: "Payment system", value: "After visa/ advance payment 50,000 BDT  visa 3,00,000 BDT" },
        { label: "Documents", value: "Passport- photo- police clearance- medical fit certificate" },
        { label: "Experience", value: "No need/3 month-1 year/1 year-2 year/1 year-3 year/1 year-4 " },
        { label: "Application deadline", value: "Date" }
    ];

    window.scrollTo(0, 0);
    return (
        <>
            <Container>
                <div className="py-5 space-y-5">
                    <GlobalBanner img={BannerImg} />
                    <div className="border-2 border-gray-400">
                        <div className="sm:p-3  w-full grid grid-cols-1 md:grid-cols-2">
                            {/* Left Side  */}
                            <div className="space-y-5 p-5">
                                <div>
                                    <h2 className="text-xl sm:text-3xl font-semibold">Work Permit Visa in Romania</h2>
                                    <p className="text-sm sm:text-base">Posted on 01 Jul 12:19 pm</p>
                                    <p className="text-xs text-primary">POST ID: (MWPV:010120)</p>
                                </div>
                                <div className="lg:pb-20">
                                    {/* <img className="lg:h-[550px]" src={image} alt="" /> */}

                                    <div className="relative">
                                        <img
                                            src={image}

                                            className="w-full lg:h-[350px] object-cover rounded-2xl"
                                        />
                                        {/* Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-2xl">
                                            <button className=" text-white p-3 rounded-full">
                                                <img src="https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424762/Bideshgami/Public/r7mpjyouem6cl6lkjw1f.png" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 px-5  lg:px-10 rounded-lg border-2 border-primary py-10">
                                    <div className="flex  flex-col justify-center items-center gap-3 px-2 lg:px-5">
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

                            {/* Right Side  */}
                            <div className="py-7 px-2 sm:px-5">
                                <div className=" flex  justify-end lg:mr-16 items-center gap-5 text-sm sm:text-base">
                                    <div className="flex justify-between items-center gap-1 bg-primary/10  px-2 rounded h-[30px]">
                                        <img src="https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734422698/Bideshgami/Public/dugzn76t39ormvj4feef.png" alt="" />
                                        <p className=" ">205 Total Apply</p>
                                    </div>

                                    <div className="flex items-center gap-1 bg-[#edf0f8] w-max px-2  py-1 rounded-md">
                                        <img src="https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734256715/Bideshgami/Public/mg5vzqsnhx71sh5rg8ts.png" alt="" />
                                    </div>

                                    <div className="flex items-center gap-1 bg-[#edf0f8] w-max px-2  py-1 rounded-md">

                                        <img src="https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734257361/Bideshgami/Public/qpcc1vcwkacldcimlksf.png" alt="" />
                                    </div>


                                </div>

                                <div className="grid grid-cols-2 max-w-[450px] mx-auto gap-5 mt-10">
                                    <button onClick={handleChatClick} className="flex w-full h-8 rounded-lg text-white bg-primary font-semibold items-center justify-center gap-2"><HiOutlineChat className="text-lg" /> Chat</button>

                                    <Link to={'/apply-form'}><button className="w-full  h-8 rounded-lg text-white bg-primary font-semibold">Apply Now</button></Link>

                                </div>
                                <div className="mt-10 space-y-2">
                                    <h2 className="text-2xl sm:text-4xl font-bold">Work Permit Visa in Romania</h2>
                                    <p className="font-medium">Work Permt Visa </p>
                                    <h3 className="text-primary font-bold text-lg sm:text-2xl">BDT 70,000</h3>
                                    <div className="flex items-center gap-1">
                                        <div className="">
                                            <img src="https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734259236/Bideshgami/Public/cfpvph9e8hg7ejnlkjhi.png" alt="" />
                                        </div>
                                        <div className="">
                                            <p className="text-sm font-semibold">
                                                Post By Verified Account
                                            </p>
                                        </div>
                                    </div>



                                    <div className="space-y-3 ">
                                        {workPermitDetails.map((detail, index) => (
                                            <div key={index} className="flex gap-1 sm:gap-2 text-sm sm:text-base">
                                                <p className=" min-w-[100px] max-w-[100px] sm:min-w-[160px] sm:max-w-[360px]  font-bold">{detail.label}</p>
                                                <p>:</p>
                                                <p className="font-medium text-[13px]">{detail.value}</p>
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
                    <div className="hidden lg:block">
                        <AddSection></AddSection>
                    </div>

                    {/* Footer image section  */}
                    <div className="w-11/12 mx-auto">
                        <img src="https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734259022/Bideshgami/Public/fwadzkx9jwfygejregry.png" className="w-full" alt="" />
                    </div>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white rounded-lg shadow-lg w-[800px]">
                                {/* Header */}
                                <div className="flex justify-between items-center p-4 border-b">
                                    <div>
                                        <h2 className="text-lg font-semibold">
                                            Chat With Malaysia Work Permit Visa
                                            <span className="text-blue-600 ml-2">(MWPV:010120)</span>
                                        </h2>
                                        <p className="text-gray-500 text-sm">20 Day Ago</p>
                                    </div>
                                    <button
                                        className="text-gray-500 hover:text-gray-700"
                                        onClick={() => handleCloseModal()}
                                    >
                                        &#x2715;
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734179243/Bideshgami/Public/zqxasvaac58ojnnclsw8.png"
                                            alt="Malaysia Work Permit"
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold">Malaysia Work Permit</h3>
                                            <p className="text-blue-600 text-sm">Starting from...</p>
                                            <p className="text-green-600 text-lg font-bold">15,000 BDT</p>
                                        </div>
                                    </div>

                                    {/* Warning Box */}
                                    <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                                        <h4 className="text-blue-600 font-medium">Be careful: avoid online scams</h4>
                                        <ul className="text-sm text-gray-600 mt-2 list-disc pl-5">
                                            <li>Never share bank card details or OTP, always product before payment.</li>
                                            <li>
                                                Check it out. <strong>Bideshgami</strong> does not provide delivery service.
                                            </li>
                                            <li>Always be alert.</li>
                                        </ul>
                                    </div>

                                    {/* Chat Box */}
                                    <div className="mt-4 bg-gray-50 border rounded-lg h-40 flex flex-col">
                                        <p className="text-gray-400 text-sm text-center mt-6">Start chatting............</p>
                                    </div>

                                    {/* Input Box */}
                                    <div className="flex items-center border-t mt-4">
                                        <input
                                            type="text"
                                            placeholder="Type"
                                            className="w-full p-3 text-gray-700 border-0 focus:outline-none"
                                        />
                                        <button className="p-3 text-white bg-blue-600 rounded-r-lg hover:bg-blue-700">
                                            &#9658;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Container>

        </>
    );
};

export default VideoDetails;