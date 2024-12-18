import React, { useEffect, useState } from "react";
import { MdOutlineSearch, MdOutlineSettingsInputComponent } from "react-icons/md";
import { Link } from "react-router-dom";

import { IoSearchSharp } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaAngleDown } from "react-icons/fa6";

const StudentBanner = () => {
    const [selectedCountry, setSelectedCountry] = useState('Select Country')

    const { data: allCountry = [], isLoading } = useQuery({
        queryKey: ['popularCategories'],
        queryFn: async () => {
            const res = await axios.get('https://restcountries.com/v3.1/all');
            // Sorting the countries alphabetically by their common name
            const sortedCountries = res.data.sort((a, b) =>
                a.name.common.localeCompare(b.name.common)
            );
            return sortedCountries;
        }
    });

    if (isLoading) {
        return '';
    }



    return (
        <>
            {/* Hero Section  */}
            <div className='hero-sec bg-cover bg-center relative h-56 z-10'>
                <div className='absolute -bottom-[150px]  lg:-bottom-[50px] left-1/2  w-full  transform -translate-x-1/2 px-10 '>
                    <div className='text-center px-5 lg:w-11/12 mx-auto rounded-lg bg-white mainBoxShadow justify-center lg:h-32 flex flex-col '>

                        <div className="flex  justify-between mb-3 mx-auto text-[10px] flex-wrap w-full">
                            <div className="lg:flex  mx-auto gap-4  lg:space-y-0">

                                <input type="text" placeholder="Choose Subject Area" className="input input-bordered w-full " />
                                <input type="text" placeholder="Choose Subject Area" className="input input-bordered w-full " />

                                <input type="text" placeholder="Choose Subject Area" className="input input-bordered w-full " />
                                <input type="text" placeholder="Choose Subject Area" className="input input-bordered w-full " />

                            </div>
                        </div>




                    </div>
                    <div className=" flex -mt-5 justify-center items-center relative">
                        <button className='btn bg-primary text-base text-white px-8 text-center font-normal border-primary rounded-md hover:bg-primary'>Search</button>
                    </div>
                </div>


            </div>



        </>
    );
};

export default StudentBanner;
