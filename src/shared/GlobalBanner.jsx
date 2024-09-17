/* eslint-disable react/prop-types */
import React from 'react';

const GlobalBanner = ({img='https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099479/heroSec_yhfbnr.png'}) => {
    return (
        <div className='h-56 w-full overflow-hidden -z-10'>
            <img className='w-full h-full object-cover' src={img} alt="" />
        </div>
    );
};

export default GlobalBanner;