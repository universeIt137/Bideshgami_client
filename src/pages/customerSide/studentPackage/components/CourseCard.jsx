import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CourseCard = ({ image, university, location, qualification, duration, price, date }) => {
    return (
        <Link to={'/student-package-details'}>
            <div className="bg-white border rounded-lg shadow hover:shadow-lg transition">
                {/* Course Image */}
                <img
                    src={image}
                    alt="Course"
                    className="w-full lg:h-44 object-cover rounded-t-lg mb-4"
                />

                <div className="p-4">
                    {/* Course Details */}
                    <h3 className="text-primary font-semibold mb-1">{university}</h3>
                    <p className="text-gray-600 text-sm mb-2 flex items-center gap-3">
                        <div className="">
                            <img src="https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734437332/Bideshgami/Public/wuqt69gkd8ccos7mqpjr.png" alt="" />
                        </div>
                        <p>{location}</p>
                    </p>

                    <div className="text-gray-700 text-sm space-y-1 mb-4">
                        <p className=' flex justify-between'>
                            <div className="flex items-center gap-3">
                                <div className="">
                                    <img src="https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734496374/Bideshgami/Public/db0lvayblkb5rapm9fzi.png" alt="" />
                                </div>
                                <div className="">
                                    {qualification}
                                    <p className='text-primary font-bold'>Foundation</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="">
                                    <img src="https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734496637/Bideshgami/Public/v1q03gaozxiv1i5zzdql.png" alt="" />
                                </div>
                                <div className="">
                                    <p className="">Entry score</p>
                                    <p className='text-primary font-bold'>5</p>
                                </div>
                            </div>
                        </p>

                    </div>

                    {/* Price and Date */}
                    <div className="flex items-center justify-between text-sm mb-4">
                        <p className="text-gray-700 ">
                            <div className="flex items-center gap-3">
                                <div className="">
                                    <img src="https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734496828/Bideshgami/Public/bttjw4rwlxysb0nqowf9.png" alt="" />
                                </div>
                                <div className="">
                                    <p className="">Total course fee</p>
                                    <p className='text-primary font-bold'>£18000</p>
                                </div>
                            </div>
                        </p>
                        <p className="text-[#002459]">{date} Ago</p>
                    </div>
                </div>

                <div className=''>
                    <div className='flex justify-center mt-2 '>
                        <button className='text-base font-bold flex gap-2 items-center'>View Details <FaArrowRightLong className='text-primary' /></button>
                    </div>
                    <div className="bg-blue-600 h-[5px] mt-3 mb-5 rounded-lg w-[240px] mx-auto"></div>
                </div>


            </div>
        </Link>

    );
};

export default CourseCard;
