import { IoMdShare } from 'react-icons/io';
import banner from '../../../assets/detailsPage/banner.jpeg'
import image1 from '../../../assets/detailsPage/image1.jpeg'
import postIcon from '../../../assets/detailsPage/postIcon.png'
import { BsChatDotsFill, BsEyeFill } from "react-icons/bs";
import AdsSection from './AdsSection';
import scamImg from '../../../assets/detailsPage/scamImg.png'
import { FaChevronDown } from 'react-icons/fa6';
import { useState } from 'react';
import Share from './Share';
import { MdFavoriteBorder } from 'react-icons/md';
const VisaDetails = () => {
    window.scrollTo(0, 0);
    const btnStyle = `bg-primary text-white w-[200px] text-[15px] font-semibold py-1.5 rounded-md transition-all duration-300 active:scale-90`
    const [seeMore, setSeeMore] = useState(false)
    return (
        <div className=''>
            {/* banner  */}
            <div className="w-full h-[140px]">
                <img className='w-full h-full object-cover' src={banner} alt="" />
            </div>
            {/* full body  */}
            <div className='px-2 sm:px-5 py-5 space-y-5'>
                <div className='px-2 sm:px-5 py-5 grid grid-cols-1 lg:grid-cols-2 shadow-md gap-5'>
                    {/* part1 */}
                    <div className='space-y-5'>
                        <div className='space-y-1'>
                            <h2 className='text-xl sm:text-3xl font-semibold'>Work Permit Visa in Romania</h2>
                            <p className='text-sm sm:text-base'>Posted on 01 Jul 12:19 pm</p>
                        </div>
                        <div className='max-w-[550px] sm:h-[465px]'><img className='w-full  h-full object-cover' src={image1} alt="" /></div>
                        <div className='space-y-1'>
                            <h2 className='text-xl sm:text-3xl font-semibold'>Work Permit Visa in Romania</h2>
                            <p className='text-sm sm:text-base'>Work Permt Visa</p>
                        </div>
                        <h1 className='text-primary text-base sm:text-xl font-bold'>BDT 70,000</h1>

                        <p className='flex gap-2 items-center border-b-[1.3px] border-gray-500 w-max pb-2 text-sm text-gray-500'><img src={postIcon} className='size-[14px]' alt="" />Post By Verified Account</p>

                        <div className='py-5 space-y-3 text-black text-sm sm:text-base'>
                            <p>Country Name : Romania</p>
                            <p>Type of Visa : Work Permit</p>
                            <p>Type of Work : Romania</p>
                            <p>Salary : 2000 Euro</p>
                            <p>Working Hours : 8 Hours</p>
                            <p>Visa Processing time : 8 Hours</p>
                            <div className='flex gap-3'>
                                <p className='min-w-[35%] sm:min-w-[140px]'>Package Included : </p>
                                <div className='space-x-2 space-y-2 text-xs font-medium'>
                                    <button className='border-2 border-black py-1 px-0.5 sm:px-1.5 rounded-lg max-w-[120px]'>Air-ticket</button>
                                    <button className='border-2 border-black py-1 px-0.5 sm:px-1.5 rounded-lg max-w-[120px]'>visa fee</button>
                                    <button className='border-2 border-black py-1 px-0.5 sm:px-1.5 rounded-lg max-w-[120px]'> Processing fee</button>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <p className='min-w-[35%] sm:min-w-[140px]'>Payment System : </p>
                                <div className='flex flex-wrap gap-2 text-xs font-medium'>
                                    <button className='border-2 border-black py-1 px-0.5 sm:px-1.5 rounded-lg max-w-[120px] flex flex-col items-center'>Advance
                                        <span className='text-[10px]'>BDT 50,00</span>
                                    </button>
                                    <button className='border-2 border-black py-1 px-0.5 sm:px-1.5 rounded-lg max-w-[120px] flex flex-col items-center'>After Work Permi
                                        <span className='text-[10px]'>BDT 50,00</span>
                                    </button>
                                    <button className='border-2 border-black py-1 px-0.5 sm:px-1.5 rounded-lg max-w-[120px] flex flex-col items-center'>After visa
                                        <span className='text-[10px]'>BDT 6,00000</span>
                                    </button>

                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <p className='min-w-[35%]  sm:min-w-[140px]'>Document : </p>
                                <div className='space-x-2 space-y-2 text-xs font-medium'>
                                    <button className='border-2 border-black py-1 px-0.5 sm:px-1.5 rounded-lg max-w-[120px]'> Passport</button>
                                    <button className='border-2 border-black py-1 px-0.5 sm:px-1.5 rounded-lg max-w-[120px]'>     Photo</button>
                                    <button className='border-2 border-black py-1 px-0.5 sm:px-1.5 rounded-lg max-w-[120px]'> police clearance</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* part2 */}
                    <div className='space-y-5'>
                        {/* share and fav  */}
                        <div className='flex gap-10 justify-end'>
                            <Share />
                            <button className='text-sm sm:text-[15px] flex items-center gap-0.5'><MdFavoriteBorder className='text-base sm:text-xl' />Favorite Card</button>
                        </div>

                        <div className='text-sm flex items-center gap-1'>
                            <BsEyeFill className='text-primary' />
                            <p className='text-xs'>205 Total Apply</p>
                        </div>
                        <div className='py-3 flex justify-center items-center gap-7'>
                            <button className={`${btnStyle}`}>Apply Now</button>
                            <button className={`${btnStyle} flex justify-center items-center gap-1`}><BsChatDotsFill /> Chat</button>
                        </div>
                        {/* add  */}
                        <div className='w-full border-primary border p-3'>
                            <h2 className='text-xl sm:text-2xl font-medium text-center'>Similar Ads</h2>
                            <hr className='border-primary mt-2 pb-5' />
                            <AdsSection />
                        </div>

                        {/* scam section  */}
                        <div className='w-full border-primary border p-3 flex justify-center items-center flex-col gap-4'>
                            <img className='size-[100px] object-cover' src={scamImg} alt="" />
                            <h2 className='text-base sm:text-xl font-medium'>Stay Alert: Avoid Online Scams</h2>
                            <p className='text-[13px]'>Never share card details or OTPs, and always verify items in person before
                                payment. Bikroy does not offer a delivery service. Stay vigilant!</p>
                            <div className='flex justify-end 2 w-full'>
                                <button onClick={() => setSeeMore(!seeMore)} className='text-sm sm:text-base flex gap-1 items-center text-primary font-semibold'>{seeMore ? 'See Less' : 'See More'} <FaChevronDown className={`${seeMore ? 'rotate-180' : 'rotate-0'} transition-all duration-200`} /></button>
                            </div>
                        </div>

                        {/* description */}
                        <h2 className='text-lg font-medium'>Description</h2>
                        <div className='w-full border-primary border p-3'>
                            <p className='text-sm sm:text-[15px] text-justify'>
                                However, as the workaround description implies, this separate tracking carries the risk of someone still being served the same ad even after the limit has been exceeded.
                                Nurses found that working safely isn’t only about PPE and sanitation, but also a much broader range of practices, from using technology in new ways to changing job descriptions Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Later this year, developers will be required to include information in a so-called “nutrition label” about how their apps collect data on their app description page.Baby cigarette “No worry of cancer with this cigarette costume,” the description for this gem reads.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5'>
                    <img src={banner} className='w-full h-[138px] object-cover' alt="" />
                    <img src={banner} className='w-full h-[138px] object-cover' alt="" />
                </div>
            </div>


        </div>
    );
};

export default VisaDetails;