/* eslint-disable react/prop-types */
import React from 'react';

const FriendBar = ({data}) => {
    const {name, image, notification, time} = data
    return ( 
        <div className='flex gap-2 w-full justify-between text-black '>
            <img src={image} className='size-9 min-w-9 rounded-full object-cover bg-gray-300' alt="" />
            <div className='text-center w-full flex flex-col justify-center items-center'>
                <p className='text-[11px] font-semibold'>{name}</p>
                <p className='text-[8px]'>{notification}</p>
            </div>
            <p className='text-[6px] w-7'>{time}</p>
        </div>
    );
};

export default FriendBar;