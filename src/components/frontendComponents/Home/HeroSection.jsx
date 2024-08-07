import React from "react";
import './HeroSection.css';
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
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
            <label className="input shadow-md input-bordered flex items-center gap-2">
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
                  <div className="">
                    <div className="bg-blue-600 rounded-full p-4">
                        <img src='airoplane.png' className='w-full' alt='mobile' />
                    </div>
                    <p>Air Ticket</p>
                  </div>
                  <div className="">
                    <div className="bg-blue-600 rounded-full p-4">
                        <img src='airoplane.png' className='w-full' alt='mobile' />
                    </div>
                    <p>Air Ticket</p>
                  </div>
                  <div className="">
                    <div className="bg-blue-600 rounded-full p-4">
                        <img src='airoplane.png' className='w-full' alt='mobile' />
                    </div>
                    <p>Air Ticket</p>
                  </div>
                  <div className="">
                    <div className="bg-blue-600 rounded-full p-4">
                        <img src='airoplane.png' className='w-full' alt='mobile' />
                    </div>
                    <p>Air Ticket</p>
                  </div>
                  <div className="">
                    <div className="bg-blue-600 rounded-full p-4">
                        <img src='airoplane.png' className='w-full' alt='mobile' />
                    </div>
                    <p>Air Ticket</p>
                  </div>
                  <div className="">
                    <div className="bg-blue-600 rounded-full p-4">
                        <img src='airoplane.png' className='w-full' alt='mobile' />
                    </div>
                    <p>Air Tickets</p>
                  </div>
                  
              </div>
        </div>
      </div>
     </>
  );
};

export default HeroSection;
