/* eslint-disable react/prop-types */
import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaArrowRightLong } from 'react-icons/fa6';

const PriceCard = ({ data }) => {
  ;
  console.log(data);

  return (
    <>
      <div className="card bg-base-100 shadow-lg w-[278px]">
        <figure className="">
          <img
            src={data?.image || ''}
            alt="Shoes"
            className="rounded-t-xl w-full  h-[162px] object-cover" />
        </figure>
        <div className="w-11/12 mx-auto mt-1">
          <div className='flex justify-between items-center text-xl'>
            <div>
              <h2 className="text-lg font-medium">{data?.title || ''}</h2>
            </div>
            <div><CiHeart className='text-xl text-primary' /></div>
          </div>
          <p className='text-xl font-bold text-[#0066FF] mt-6'>{data?.price || ''}</p>

          <p className='text-end text-xs font-medium'>{data?.posted}</p>

          <div className='flex justify-center mt-3'>
            <button className='btn-ghost text-base font-bold flex gap-2 items-center'>View Details <FaArrowRightLong className='text-primary' /></button>
          </div>
          <div className="bg-blue-600 p-1 my-8 rounded-lg"></div>
        </div>
      </div>
    </>
  );
};

export default PriceCard;