import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { MdOutlineSettingsInputComponent } from 'react-icons/md';
import './airTicket.css';
import { FaChevronDown } from 'react-icons/fa';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import Destination from './Destination';

const AirTicketBanner = () => {
    const [tripType, setTripType] = useState('roundTrip'); // State for radio selection

    // Handler to update the state based on selection
    const handleChange = (event) => {
        setTripType(event.target.value);
    };
    // window.scrollTo(0, 0);
    return (
        <div className='mb-10'>
            <div className='airHero-sec bg-cover bg-center relative h-56'>
                <div className='absolute lg:top-32 left-1/2  w-full  transform -translate-x-1/2'>


                    <div className='p-5 lg:w-11/12 mx-auto rounded-lg bg-white mainBoxShadow -mt-10'>

                        <div className="flex gap-5 lg:ml-10 items-center">
                            <div className="flex justify-center gap-2">
                                <input
                                    type="radio"
                                    name="tripType"
                                    value="roundTrip"
                                    className="radio radio-primary"
                                    checked={tripType === 'roundTrip'}
                                    onChange={handleChange}
                                />
                                <span className='font-bold'>Round Trip</span>
                            </div>

                            <div className="flex justify-center gap-2">
                                <input
                                    type="radio"
                                    name="tripType"
                                    value="multiCity"
                                    className="radio radio-primary"
                                    checked={tripType === 'multiCity'}
                                    onChange={handleChange}
                                />
                                <span className='font-bold'>Multi City</span>
                            </div>
                        </div>

                        {/* Select destination section  */}
                        <Destination />

                        {
                            tripType === 'multiCity' && <Destination />
                        }






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