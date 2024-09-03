import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { MdOutlineSettingsInputComponent } from 'react-icons/md';
import './airTicket.css';
import { FaChevronDown } from 'react-icons/fa';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';

const AirTicketBanner = () => {
    window.scrollTo(0, 0);
    return (
        <div className='mb-10'>
            <div className='airHero-sec bg-cover bg-center relative h-56'>
                <div className='absolute lg:top-32 left-1/2  w-full  transform -translate-x-1/2'>


                    <div className='p-5 lg:w-11/12 mx-auto rounded-lg bg-white mainBoxShadow -mt-10'>

                        {/* Radio Button Section  */}
                        <div className="flex gap-5 lg:ml-10 items-center">
                            <div className="flex justify-center gap-2">
                                <input type="radio" name="radio-2" className="radio radio-primary" defaultChecked />
                                <span className='font-bold'>Round Trip</span>
                            </div>

                            <div className="flex justify-center gap-2">
                                <input type="radio" name="radio-2" className="radio radio-primary" />
                                <span className='font-bold'>Multi City</span>
                            </div>

                        </div>

                        {/* Select destination section  */}
                        <div className="lg:flex gap-2 pt-5 ">

                            {/* from to section  */}
                            <div className="flex lg:w-2/5">
                                <div className="border p-3 rounded-lg text-gray-400 w-1/2">
                                    <p>From</p>
                                    <p className="lg:text-xl font-bold">Dhaka</p>
                                    <p className="text-[12px]">Hazrat Shahjalal International Airport</p>
                                </div>
                                <div className="flex items-center justify-center  ">
                                    <p className='text-primary p-3 bg-white border rounded-[24px] -mx-10 shadow-2xl z-20'><FaArrowRightArrowLeft /></p>
                                </div>
                                <div className="border p-3 rounded-lg text-gray-400 w-1/2">
                                    <div className='ml-3'>
                                        <p>To</p>
                                        <p className="lg:text-xl font-bold">Chittagong</p>
                                        <p className="text-[12px]">Shah Amanat International</p>
                                    </div>
                                </div>
                            </div>

                            {/* Depature return section  */}
                            <div className="flex lg:w-2/5">
                                <div className="border p-3 rounded-lg text-gray-400 w-1/2">
                                    <p className='flex items-center  gap-2'>Depature<FaChevronDown /></p>
                                    <p className='lg:text-xl font-bold'>Aug 24</p>
                                    <p className='text-[12px]'>Wednesday</p>
                                </div>

                                <div className="border p-3 rounded-lg text-gray-400 w-1/2">
                                    <p className='flex items-center  gap-2'>Return <FaChevronDown /></p>
                                    <p className='text-[12px]'>Tap to book return ticket</p>
                                    <p className='text-[12px]'>for more savings</p>
                                </div>


                            </div>

                            {/* Booking class section  */}
                            <div className="flex lg:w-1/5">
                                <div className="border p-3 rounded-lg text-gray-400 w-full">
                                    <p className='flex items-center  gap-2'>Travelers & Booking Class</p>
                                    <p className='lg:text-xl font-bold'>1 Traveler</p>
                                    <p className=''>Economy</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:flex gap-2 pt-5 ">

                            {/* from to section  */}
                            <div className="flex lg:w-2/5">
                                <div className="border p-3 rounded-lg text-gray-400 w-1/2">
                                    <p>From</p>
                                    <p className="lg:text-xl font-bold">Dhaka</p>
                                    <p className="text-[12px]">Hazrat Shahjalal International Airport</p>
                                </div>
                                <div className="flex items-center justify-center  ">
                                    <p className='text-primary p-3 bg-white border rounded-[24px] -mx-10 shadow-2xl z-20'><FaArrowRightArrowLeft /></p>
                                </div>
                                <div className="border p-3 rounded-lg text-gray-400 w-1/2">
                                    <div className='ml-3'>
                                        <p>To</p>
                                        <p className="lg:text-xl font-bold">Chittagong</p>
                                        <p className="text-[12px]">Shah Amanat International</p>
                                    </div>
                                </div>
                            </div>

                            {/* Depature return section  */}
                            <div className="flex lg:w-2/5">
                                <div className="border p-3 rounded-lg text-gray-400 w-1/2">
                                    <p className='flex items-center  gap-2'>Depature<FaChevronDown /></p>
                                    <p className='lg:text-xl font-bold'>Aug 24</p>
                                    <p className='text-[12px]'>Wednesday</p>
                                </div>

                                <div className="border p-3 rounded-lg text-gray-400 w-1/2">
                                    <p className='flex items-center  gap-2'>Return <FaChevronDown /></p>
                                    <p className='text-[12px]'>Tap to book return ticket</p>
                                    <p className='text-[12px]'>for more savings</p>
                                </div>


                            </div>

                            {/* Booking class section  */}
                            <div className="flex lg:w-1/5">
                                <div className="border p-3 rounded-lg text-gray-400 w-full">
                                    <p className='flex items-center  gap-2'>Travelers & Booking Class</p>
                                    <p className='lg:text-xl font-bold'>1 Traveler</p>
                                    <p className=''>Economy</p>
                                </div>
                            </div>
                        </div>

                       

                        

                        {/* Fare buttons  */}
                        <div className="py-3 lg:flex items-center gap-4">

                            <div className="mt-5">
                                <p className="font-bold">Fare Type:</p>
                            </div>

                            <div className="lg:flex gap-3 mt-5">

                                <div className="flex gap-2 flex-col lg:flex-row">
                                    <button className="bg-blue-100 hover:bg-blue-200 text-gray-700  py-2 px-4 rounded-xl inline-flex items-center ">
                                        <input type="radio" name="radio-2" className="radio radio-primary mr-2" />
                                        Regular Fares
                                    </button>

                                    <button className="bg-blue-100 hover:bg-blue-200 text-gray-700  py-2 px-4 rounded-xl inline-flex items-center">
                                        <input type="radio" name="radio-2" className="radio radio-primary mr-2" />
                                        Student Fares
                                    </button>
                                </div>

                                <div className="flex gap-2 flex-col lg:flex-row mt-2 lg:mt-0">
                                    <button className="bg-blue-100 hover:bg-blue-200 text-gray-700  py-2 px-4 rounded-xl inline-flex items-center">
                                        <input type="radio" name="radio-2" className="radio radio-primary mr-2" />
                                        Umrah Fares
                                    </button>

                                    <button className="bg-blue-100 hover:bg-blue-200 text-gray-700  py-2 px-4 rounded-xl inline-flex items-center">
                                        <input type="radio" name="radio-2" className="radio radio-primary mr-2" />
                                        Seaman Fares
                                    </button>
                                </div>



                            </div>

                        </div>


                    </div>
                    <div className=" flex -mt-5 justify-center items-center">
                        <button className='btn bg-primary text-white px-8 text-center'>Submit</button>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default AirTicketBanner;