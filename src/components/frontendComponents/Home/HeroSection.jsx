import React, {useEffect } from "react";
import './HeroSection.css';
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { Link } from "react-router-dom";
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import AirTicket from '../../../assets/icon/airoplane.png';
import honeymoon from '../../../assets/icon/honeymoon.png';
import hotel from '../../../assets/icon/hotel.png';
import kaaba from '../../../assets/icon/kaaba.png';
import passport from '../../../assets/icon/passport.png';
import playbutton from '../../../assets/icon/play-button.png';
import questionmark from '../../../assets/icon/question-mark.png';
import student from '../../../assets/icon/student.png';
import workpermit from '../../../assets/icon/workpermit.png';

const HeroSection = () => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 2, // Show 2 slides at a time
      spaceBetween: 10, // Space between slides
      navigation: true, // Show navigation arrows
      pagination: { // Show pagination bullets
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1, // Show 1 slide at a time on small screens
        },
        768: {
          slidesPerView: 2, // Show 2 slides at a time on larger screens
        },
      },
    });

    return () => {
      swiper.destroy(); // Clean up Swiper instance on unmount
    };
  }, []);

  let dataIcon = [
    {
      id :1,
      img: AirTicket,
      title: 'Air-Ticket'
    },
    {
      id : 2,
      img: workpermit,
      title: 'Work Permit'
    },
    {
      id :1,
      img: student,
      title: 'Student Visa'
    },
    {
      id :1,
      img: kaaba,
      title: 'Hajj Umrah'
    },
    {
      id :1,
      img: passport,
      title: 'Visa Processing'
    },
    {
      id :1,
      img: hotel,
      title: 'Tour Package'
    },
    {
      id :1,
      img: playbutton,
      title: 'Video'
    },
    {
      id :1,
      img: questionmark,
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
                dataIcon.map((item) => (
                  <Link key={item.id} className="flex flex-col items-center justify-center text-center">
                    <div className="bg-blue-600 hover:bg-blue-700 transition-all rounded-full w-16 h-16 flex items-center justify-center">
                      <img src={item.img} className='w-3/4 h-3/4' alt={item.title} />
                    </div>
                    <p className="font-semibold mt-2">{item.title}</p>
                  </Link>
                ))
              }

             
                  
              </div>
        </div>
      </div>
      {/* Slider */}
      <div className="container mx-auto mt-5">
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img className="rounded-md w-full h-auto" src='Component-1.png' alt="component1"/>
          </div>
          <div className="swiper-slide">
            <img className="rounded-md w-full h-auto" src='Component-2.png' alt="component2"/>
          </div>
          {/* Add more slides as needed */}
        </div>
        {/* Pagination */}
        <div className="swiper-pagination"></div>
        {/* Navigation */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>

      
     </>
  );
};

export default HeroSection;
