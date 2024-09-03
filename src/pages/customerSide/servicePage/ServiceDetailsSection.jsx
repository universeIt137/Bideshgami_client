import React, { useState } from 'react';
import { FaChevronDown, FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoChatbubbleEllipsesSharp, IoShareSocialOutline } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Alldata = [
    {
        id: 1,
        key: "Country Name",
        value: "Romaina"
    },
    {
        id: 2,
        key: "Type of Visa",
        value: "Work Permit"
    },
    {
        id: 3,
        key: "Type of Work",
        value: "Plumber"
    },
    {
        id: 4,
        key: "Company name",
        value: "xyz company"
    },
    {
        id: 5,
        key: "Working hours",
        value: "10 hours"
    },
    {
        id: 6,
        key: "Processing time",
        value: "2 months"
    },
    {
        id: 7,
        key: "Age",
        value: "21-40"
    },
    {
        id: 8,
        key: "Iqama cost",
        value: "Self/company"
    },
    {
        id: 91,
        key: "Education",
        value: "No need/ PSC/ JSC/ SSC/ HSC/ HONORS/ DEGREE/MASTERS"
    },
    {
        id: 9,
        key: "Document",
        value: "Tenure of job: 3 Month/ 6 month/ 1 Year/ 2 year/ 3 year/ 4 year/ 5 year"
    },
    {
        id: 10,
        key: "Living cost",
        value: "self/company"
    },
    {
        id: 11,
        key: "Meal cost",
        value: "self/company"
    },
    {
        id: 12,
        key: "Gender",
        value: "male/female/male-female both"
    },
    {
        id: 13,
        key: "Package included",
        value: "air-ticket-visa fee-processing fee- BMET"
    },
    {
        id: 14,
        key: "Payment system",
        value: "After visa/ advace payment  50,000 BDT  After visa 3,00000 BDT"
    },
    {
        id: 15,
        key: "Documents",
        value: "Passport- photo- police clearance- medical fit certificate"
    },
    {
        id: 16,
        key: "Experience",
        value: "No need/3 month-1 year/1 year-2 year/1 year-3 year/1 year-4 year/1year-5 year "
    },
    {
        id: 17,
        key: "Application deadline",
        value: "10-04-24"
    }
]

const description = `
    However, as the workaround description implies, this separate tracking carries the risk of someone still being served the same ad even after the limit has been exceeded.
    Nurses found that working safely isn’t only about PPE and sanitation, but also a much broader range of practices, from using technology in new ways to changing job descriptions Those restaurants’ profiles on Goldbelly are then linked to in the description box of the video and Thrillist makes a commission off of any transactions.Later this year, developers will be required to include information in a so-called “nutrition label” about how their apps collect data on their app description page.Baby cigarette “No worry of cancer with this cigarette costume,” the description for this gem reads.However, as the workaround description implies, this separate tracking carries the risk of someone still being served the same ad even after the limit has been exceeded.
    Nurses found that working safely isn’t only about PPE and sanitation, but also a much broader range of practices, from using technology in new ways to
`


const ServiceDetailsSection = () => {
    const [show, setShow] = useState(false);
    const [favourite, setFavourite] = useState(false);
    console.log(favourite);
    const trimmedText = description?.slice(0, 300);
    return (
        <>
            <div className="border p-2 container mx-auto lg:my-10">

                <seciton className="header-info">
                    <div className="lg:flex justify-between">
                        <div className="">
                            <p className='lg:text-4xl font-bold'>Work Permit Visa in Romania</p>
                            <p className='text-black'>Posted on 01 Jul 12:19 pm</p>
                        </div>

                        <div className="flex items-center gap-2  px-1 rounded-lg">
                            <div className="bg-[#edf0f8] flex items-center lg:gap-2 p-3 rounded-lg">
                                <div>
                                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1724930954/Bideshgami%20images/Icons/qshxbmfhzjdxus1ujysm.png" className='' alt="" />   </div>
                                <p className='text-[12px] lg:text-xl'>205 Total Apply</p>
                            </div>

                            <div className="text-[#d46f77] bg-[#edf0f8] flex items-center gap-2 p-3 rounded-lg">
                                <p><FaRegHeart /></p>
                                <p className='text-[12px] lg:text-xl'>109</p>
                            </div>


                            <div className="">
                                <details className="dropdown">
                                    <summary className="btn  lg:text-3xl text-[14px]"><IoShareSocialOutline /></summary>
                                    <ul className="menu dropdown-content w-40 bg-base-100 rounded-box z-[1] shadow">
                                        <li>
                                            <div className='flex'>
                                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725094453/Bideshgami%20images/Service%20Details/icons/lgkcc9uyopazkhb27gg6.png" alt="" />
                                                <p>Whatsapp</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='flex'>
                                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725094665/Bideshgami%20images/Service%20Details/icons/aoxhask0uuvb0oghka9t.png" alt="" />
                                                <p>Facebook</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='flex'>
                                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725094710/Bideshgami%20images/Service%20Details/icons/unz1s3jpqjmkvo1n0exy.png" alt="" />
                                                <p>Gmail</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className='flex'>
                                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725094751/Bideshgami%20images/Service%20Details/icons/xnec9o5a5tstgb07xocj.png" alt="" />
                                                <p>Copy Link</p>
                                            </div>
                                        </li>
                                    </ul>
                                </details>
                            </div>


                            <div onClick={() => setFavourite(!favourite)} className="bg-[#edf0f8] p-2 text-2xl rounded-lg cursor-pointer">
                                {
                                    favourite ? <p className='text-primary p-1 text-xl'><FaRegHeart /></p>
                                        : <p className='text-primary p-1 text-xl'><FaHeart /></p>
                                }

                            </div>
                        </div>
                    </div>
                </seciton>

                <section className="overview-section mt-5 ">
                    <div className="lg:flex justify-between gap-5 ">
                        {/* image section */}
                        <div className=" lg:w-1/2 mb-4">
                            <div className="">
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1724930487/Bideshgami%20images/Service%20Details/yrcssubd6lxfudhkd9ha.png" className='w-full' alt="" />
                            </div>

                            <Link to="/safety-tips">
                                <div className="border border-[#0066ff] p-10 mt-10 rounded-lg">
                                    <div className=" flex flex-col items-center p-5">
                                        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1724932402/Bideshgami%20images/Service%20Details/osok0gttfslw9b4wootu.png" alt="" />
                                        <p className='text-2xl font-bold'>
                                            Stay Alert: Avoid Online Scams
                                        </p>
                                        <p>
                                            Never share card details or OTPs, and always verify items in person before
                                            payment. Bikroy does not offer a delivery service. Stay vigilant!
                                        </p>
                                    </div>
                                    <p className='text-end'>See all safety tips</p>
                                </div>
                            </Link>
                        </div>
                        {/* info section  */}
                        <div className="lg:w-1/2">
                            {/* button section  */}
                            <div className="flex justify-center gap-4">
                                <button className="btn bg-primary text-white lg:btn-wide lg:text-xl"><IoChatbubbleEllipsesSharp />Chat</button>
                                <Link to={"/apply-form"}><button className="btn bg-primary text-white lg:btn-wide lg:text-xl">Apply Now</button></Link>
                            </div>

                            {/* information section  */}
                            <div className="lg:p-3 mt-5">
                                <p className='lg:text-4xl text-2xl font-bold'>Work Permit Visa in Romania</p>
                                <p className='text-gray-600 font-bold py-3'>Work Permit Visa </p>
                                <p className='text-3xl font-bold text-primary'>BDT 70,000</p>
                                <div className="flex items-center gap-3 border-b-2">
                                    <div className="">
                                        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725080407/Bideshgami%20images/Service%20Details/icons/ogiuilq29xkhgxgvavnd.png" alt="" />
                                    </div>
                                    <p className='font-bold text-gray-600'>Post By Verified Account</p>
                                </div>
                            </div>

                            {/* table data  */}
                            <div className="space-y-2 p-3">
                                {
                                    Alldata?.map((data) =>
                                        <div key={data.id} className="grid grid-cols-2">
                                            <p className='font-bold'>{data.key}</p>
                                            <p>: {data.value}</p>
                                        </div>)
                                }




                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className='container mx-auto '>
                <p className='text-3xl font-bold lg:mt-20 mt-4 ml-4 lg:ml-0'>Description</p>
            </div>
            <section className="description-section container mx-auto border my-5">
                <div className="p-5">

                    <p>
                        {show ? description : trimmedText}
                    </p>

                    <div className="flex items-center gap-2 justify-end">
                        <p className='text-end text-primary'>
                            <button onClick={() => setShow(!show)}>
                                {
                                    show ? "Show Less" : "Show More"
                                }
                            </button>
                        </p>
                        {
                            show ? <MdOutlineKeyboardArrowUp className='text-primary' /> : <MdOutlineKeyboardArrowDown className='text-primary' />
                        }


                    </div>
                </div>
            </section>
        </>
    );
}


export default ServiceDetailsSection;