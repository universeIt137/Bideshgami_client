import React, { useEffect } from "react";
import './HeroSection.css';
import { MdOutlineSearch, MdOutlineSettingsInputComponent } from "react-icons/md";
import { Link } from "react-router-dom";


import HomePageSliderSection from "./HomePageSliderSection";
import { IoSearchSharp } from "react-icons/io5";

const HeroSection = () => {


  let dataIcon = [
    {
      id: 1,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099528/airoplane_et3w27.png',
      title: 'Air-Ticket'
    },
    {
      id: 2,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099526/workpermit_ltyza3.png',
      title: 'Work Permit'
    },
    {
      id: 1,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099523/student_knkkhn.png',
      title: 'Student Visa'
    },
    {
      id: 1,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099534/kaaba_pdvqkk.png',
      title: 'Hajj Umrah'
    },
    {
      id: 1,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099536/passport_gannt5.png',
      title: 'Visa Processing'
    },
    {
      id: 1,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099532/hotel_tmanpg.png',
      title: 'Tour Package'
    },
    {
      id: 1,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099520/play-button_wt1rkb.png',
      title: 'Video'
    },
    {
      id: 1,
      img: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099522/question-mark_ysnafb.png',
      title: 'Question'
    }
  ]
  return (
    <>
      {/* Hero Section  */}
      <div className='hero-sec bg-cover bg-center relative h-56'>
        <div className='absolute bottom-9p left-1/2  w-full  transform -translate-x-1/2 px-10'>
          <div className='text-center p-5 max-w-[574px] mx-auto rounded-lg bg-white mainBoxShadow justify-center'>

            <div className="flex gap-4 justify-between mb-3 max-w-[350px] mx-auto text-[13px]">

              <select className=' bg-blue-600 text-white font-semibold border-0 hover:bg-blue-500 px-3  min-w-[133px] h-[33px] rounded-xl'>
                <option value="">Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Afganistan">Afganistan</option>
                <option value="Dubai">Dubai</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Turkey">Turkey</option>
                <option value="Franch">Franch</option>
              </select>

              <select className=' bg-blue-600 rounded-xl text-white font-semibold border-0 px-3 w-[121px] hover:bg-blue-500 h-[33px]'>
                <option value="">Type of work</option>
                <option value="Labour">Labour</option>
                <option value="Lawyer">Lawyer</option>
                <option value="Programmer">Programmer</option>
              </select>

              <button className=' bg-blue-600 text-white font-semibold border-0 hover:bg-blue-500 px-5 h-[33px] rounded-xl'><MdOutlineSettingsInputComponent /></button>
            </div>
            <div className="relative max-w-[350px] mx-auto">
              <input type="text" className="grow rounded-xl  text-center h-9 w-full inputShadow" placeholder="Search in Bideshgami" />
              <p className="rounded-full bg-blue-600 text-white absolute right-1.5 top-1.5 size-6 flex justify-center items-center">
                <IoSearchSharp className="text-[15px]" />
              </p>
            </div>
          </div>
        </div>


      </div>
      <div className='container mx-auto text-center pt-20 '>
        <div className="pt-7">
          <div className='flex justify-center gap-8 flex-wrap' >
            {
              dataIcon.map((item, idx) => (
                <Link key={idx} className="flex flex-col items-center justify-center text-center">
                  <div className="bg-blue-600 hover:bg-blue-700 transition-all rounded-full size-[51px] flex items-center justify-center">
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
