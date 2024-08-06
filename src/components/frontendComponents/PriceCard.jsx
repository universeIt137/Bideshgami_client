import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaArrowRightLong } from 'react-icons/fa6';

const PriceCard = () => {
  return (
    <>
      <div className="card bg-base-100 shadow-lg ">
        <figure className="">
          <img
            src="https://res.cloudinary.com/deifi77os/image/upload/v1722704356/Bideshgami/n6cydse6rc6osbd7fvsz.png"
            alt="Shoes"
            className="rounded-xl w-full" />
        </figure>
        <div className="w-11/12 mx-auto mt-1">
          <div className='flex justify-between items-center text-xl'>
            <div>
              <h2 className="">Malaysia Work Permit</h2>
            </div>
            <div><CiHeart /></div>
          </div>
          <p className='text-2xl font-bold text-[#0066FF] mt-6'>15,000 BDT</p>
          
            <p className='text-end text-xl'>20 Day Ago</p>
          
          <div className='flex justify-center mt-3'>
            <button className='btn-ghost text-2xl font-bold flex gap-3 items-center'>View Details <FaArrowRightLong /></button>
          </div>
          <div className="bg-blue-600 p-1 my-8 rounded-lg"></div>
        </div>
      </div>
    </>
  );
};

export default PriceCard;