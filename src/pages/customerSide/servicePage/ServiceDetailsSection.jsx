import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoChatbubbleEllipsesSharp, IoShareSocialOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ServiceDetailsSection = () => (
    <>
        <div className="border p-2 container mx-auto mt-10">

            <seciton className="header-info">
                <div className="flex justify-between">
                    <div className="">
                        <p className='text-4xl font-bold'>Work Permit Visa in Romania</p>
                        <p className='text-black'>Posted on 01 Jul 12:19 pm</p>
                    </div>

                    <div className="flex items-center gap-2  px-1 rounded-lg">
                        <div className="bg-[#edf0f8] flex items-center gap-2 p-2 rounded-lg">
                            <div>
                                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1724930954/Bideshgami%20images/Icons/qshxbmfhzjdxus1ujysm.png" className='' alt="" />   </div>
                            <p>205 Total Apply</p>
                        </div>

                        <div className="text-[#d46f77] bg-[#edf0f8] flex items-center gap-2 p-2 rounded-lg">
                            <p><FaRegHeart /></p>
                            <p>109</p>
                        </div>

                        <div className="bg-[#edf0f8] p-2 text-2xl rounded-lg">
                            <IoShareSocialOutline />
                        </div>

                        <div className="bg-[#edf0f8] p-2 text-2xl rounded-lg">
                            <p className='text-primary'><FaRegHeart /></p>
                        </div>
                    </div>
                </div>
            </seciton>

            <section className="overview mt-5">
                <div className="grid grid-cols-2">
                    {/* image section */}
                    <div className="">
                        <div className="">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1724930487/Bideshgami%20images/Service%20Details/yrcssubd6lxfudhkd9ha.png" className='w-full' alt="" />
                        </div>

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
                    </div>
                    {/* info section  */}
                    <div className="">
                        <div className="flex justify-center gap-4">
                            <button className="btn bg-primary text-white btn-wide text-xl"><IoChatbubbleEllipsesSharp />Chat</button>
                            <Link to={"/apply-form"}><button className="btn bg-primary text-white btn-wide text-xl">Apply Now</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);

export default ServiceDetailsSection;