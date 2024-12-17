import React, { useEffect, useState } from "react";
import './HeroSection.css';
import { MdOutlineSearch, MdOutlineSettingsInputComponent } from "react-icons/md";
import { Link } from "react-router-dom";
import tourPackage from '../../../assets/icon/honeymoon.png'

import HomePageSliderSection from "./HomePageSliderSection";
import { IoSearchSharp } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaAngleDown } from "react-icons/fa6";

const HeroSection = () => {
  const [selectedCountry, setSelectedCountry] = useState('Select Country')
  let dataIcon = [
    {
      id: 1,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099528/airoplane_et3w27.png',
      title: 'Air-Ticket',
      url: '/air-ticket'
      
    },
    {
      id: 2,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099526/workpermit_ltyza3.png',
      title: 'Work Permit',
      url: '/work-permit'
    },
    {
      id: 1,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099523/student_knkkhn.png',
      title: 'Student Visa'
    },
    {
      id: 1,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099534/kaaba_pdvqkk.png',
      title: 'Hajj Umrah',
      url: '/hajj-umrah'
    },
    {
      id: 1,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099536/passport_gannt5.png',
      title: 'Visa Processing'
    },
    {
      id: 1,
      img: tourPackage,
      title: 'Tour Package'
    },
    {
      id: 1,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099532/hotel_tmanpg.png',
      title: 'Tour Package'
    },
    {
      id: 1,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099520/play-button_wt1rkb.png',
      title: 'Video',
      url: '/videos'
    },
    {
      id: 1,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099522/question-mark_ysnafb.png',
      title: 'Question'
    }
  ]
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

  console.log(allCountry.length);

  return (
    <>
      {/* Hero Section  */}
      <div className='hero-sec bg-cover bg-center relative h-56 z-10'>
        <div className='absolute bottom-9p left-1/2  w-full  transform -translate-x-1/2 px-10'>
          <div className='text-center px-5 max-w-[574px] mx-auto rounded-lg bg-white mainBoxShadow justify-center h-[108px] flex flex-col'>

            <div className="flex  justify-between mb-3 max-w-[322px] mx-auto text-[13px] flex-wrap w-full">
              <div className="dropdown dropdown-bottom dropdown-end">
                <button
                  tabIndex={0} className='bg-primary text-white font-semibold border-0 px-1  min-w-[123px] max-w-[123px] h-[33px] rounded-xl outline-none flex justify-between items-center gap-1 overflow-hidden'>

                  <p className=" text-nowrap max-w-[85%] overflow-hidden">{selectedCountry}</p> <p className=""><FaAngleDown /></p>


                </button>

                <ul tabIndex={0} className="dropdown-content bg-base-100 rounded-box z-10 relative w-52 p-2 shadow max-h-[450px] overflow-y-auto">
                  <div onClick={() => setSelectedCountry('Select Country')} value="" className="cursor-pointer p-1 bg-white border-b border-gray-400 flex items-center gap-2">
                    <div className="w-8 h-5"></div>
                    <p>Select Country</p>
                  </div>
                  {
                    allCountry?.map((item, idx) => <div key={idx} onClick={() => setSelectedCountry(item.name.common)} value={item.name.common} className={`cursor-pointer p-1 border-b border-gray-400 flex items-center gap-2 ${selectedCountry===item.name.common ? 'bg-gray-200' : 'bg-white'}`}>
                      <img src={item.flags.png} className="w-8 h-5" alt="" />
                      <p className="text-start">{item.name.common}</p>
                    </div>)
                  }
                </ul>
              </div>


              <select className=' bg-primary rounded-xl text-white font-semibold border-0 px-1 min-w-[111px] h-[33px]'>
                <option value="">Type of work</option>
                <option value="Labour">Labour</option>
                <option value="Lawyer">Lawyer</option>
                <option value="Programmer">Programmer</option>
              </select>

              <div className="hidden lg:flex">
                <button className=' bg-primary text-white font-semibold border-0 px-5 h-[33px] rounded-xl text-xl w-[60px]'><MdOutlineSettingsInputComponent /></button>
              </div>

              <div className="w-1/2 mx-auto mt-1 lg:hidden">
                <button className=' bg-blue-600 text-white font-semibold border-0 hover:bg-blue-500 px-5 h-[33px] rounded-xl'><MdOutlineSettingsInputComponent /></button>
              </div>

            </div>
            <div className="relative max-w-[322px] mx-auto w-full">
              <input type="text" className="grow rounded-xl  text-center h-[34px] w-full inputShadow outline-none text-xs" placeholder="Search in Bideshgami" />
              <p className="rounded-full bg-blue-600 text-white absolute right-2 top-1 size-6 flex justify-center items-center">
                <IoSearchSharp className="text-[15px]" />
              </p>
            </div>
          </div>
        </div>


      </div>
      <div className='container mx-auto text-center pt-20'>
        <div className="pt-7">
          <div className='flex justify-center gap-5 flex-wrap' >
            {
              dataIcon.map((item, idx) => (
                <Link to={item?.url} key={idx} className="flex flex-col items-center justify-center text-center">
                  <div className="bg-primary transition-all rounded-full size-[51px] flex items-center justify-center">
                    <img src={item.img} className='size-8' alt={item.title} />
                  </div>
                  <p className="font-semibold mt-2 text-xs">{item.title}</p>
                </Link>
              ))
            }



          </div>
        </div>
      </div>
      {/* Slider */}
      <HomePageSliderSection />


    </>
  );
};

export default HeroSection;
