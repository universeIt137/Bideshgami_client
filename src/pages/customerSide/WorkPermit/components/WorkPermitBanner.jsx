import React, { useEffect, useState } from "react";
import { MdOutlineSearch, MdOutlineSettingsInputComponent } from "react-icons/md";
import { Link } from "react-router-dom";

import { IoSearchSharp } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaAngleDown } from "react-icons/fa6";

const WorkPermitBanner = () => {
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
                    <div className='text-center px-5 lg:w-1/2 mx-auto rounded-lg bg-white mainBoxShadow justify-center lg:h-32 flex flex-col '>

                        <div className="flex  justify-between mb-3 mx-auto text-[10px] flex-wrap w-full">
                            <div className="lg:flex  mx-auto gap-4  lg:space-y-0">

                                <input type="text" placeholder="Country Name" className="input input-bordered w-full " />
                                <input type="text" placeholder="Type of Work" className="input input-bordered w-full " />

                            </div>
                        </div>
                        <div className="relative w-full lg:w-1/2 mx-auto">
                            <input type="text" className="lg:grow rounded-xl  text-center h-[44px] w-full inputShadow outline-none text-[14px]  lg:text-[12px]" placeholder="Search Your Tour Package" />
                            <p className="rounded-full bg-blue-600 text-white absolute right-2 top-2 size-6 flex justify-center items-center">
                                <IoSearchSharp className="text-[15px]" />
                            </p>
                        </div>
                    </div>
                </div>


            </div>



        </>
    );
};

export default WorkPermitBanner;
