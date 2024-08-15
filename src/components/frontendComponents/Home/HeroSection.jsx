import React, { useEffect } from "react";
import './HeroSection.css';
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { Link } from "react-router-dom";


import HomePageSliderSection from "./HomePageSliderSection";

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
        <div className='absolute bottom-9p left-1/2 lg:w-2/5 transform -translate-x-1/2'>
          <div className='text-center py-5 px-20 rounded-lg bg-white shadow-md'>

            <div className="flex gap-4 justify-center mb-3">

              <select className='select bg-blue-600 rounded-2xl text-white font-semibold border-0 hover:bg-blue-500'>
                <option value="">Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Afganistan">Afganistan</option>
                <option value="Dubai">Dubai</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Turkey">Turkey</option>
                <option value="Franch">Franch</option>
              </select>

              <select className='select bg-blue-600 rounded-2xl text-white font-semibold border-0 hover:bg-blue-500'>
                <option value="">Type of work</option>
                <option value="Labour">Labour</option>
                <option value="Lawyer">Lawyer</option>
                <option value="Programmer">Programmer</option>
              </select>

              <button className='btn bg-blue-600 rounded-2xl text-white font-semibold border-0 hover:bg-blue-500'><MdOutlineSettingsInputComponent /></button>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow rounded-3xl  text-center" placeholder="Search in Bideshgami" />
              <span className="p-2 rounded-full font-bold bg-blue-600 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
              </span>
            </label>
          </div>
        </div>


      </div>
      <div className='container mx-auto text-center pt-20 '>
        <div className="pt-7">
          <div className='flex justify-center gap-8' >
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
