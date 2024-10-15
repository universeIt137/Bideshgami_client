/* eslint-disable react/prop-types */
import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const PriceCard = ({ data }) => {
  ;
  console.log(data);

  return (
    <>
      <Link to={'/service-details'}>
        <div className="card bg-base-100 shadow-lg w-[278px] min-h-[324px] h-full">
          <figure className="min-h-[162px]  h-[162px]">
            <img
              src={data?.image || ''}
              alt="Shoes"
              className="rounded-t-xl w-full min-h-[162px]  h-[162px] object-cover" />
          </figure>
          <div className="w-11/12 mx-auto mt-1 h-full flex flex-col justify-between">
            <div>
              <div className='flex justify-between items-center text-xl'>
                <div>
                  <h2 className="text-lg font-medium leading-5">{data?.title || ''}</h2>
                </div>
                <div><CiHeart className='text-2xl text-primary' /></div>
              </div>
              <p className='text-xl font-bold text-[#0066FF] mt-3'>{data?.price || ''}</p>
  
              <p className='text-end text-xs font-medium'>{data?.posted}</p>
            </div>

           <div className=''>
              <div className='flex justify-center mt-2 '>
                <button className='text-base font-bold flex gap-2 items-center'>View Details <FaArrowRightLong className='text-primary' /></button>
              </div>
              <div className="bg-blue-600 h-[5px] mt-3 mb-5 rounded-lg w-[240px] mx-auto"></div>
           </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PriceCard;