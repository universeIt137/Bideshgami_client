import React from 'react';
import Table from './Table';

const QRpage = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <div className="w-3/4 shadow-xl bg-gray-200 mx-auto mt-10 rounded-xl mb-24 pb-10">
                <div className="flex flex-col justify-center items-center p-4 mb-5 space-y-2">
                    <img src='https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099201/logo_j54wbc.png' className='w-48' alt='logo' />
                    <p className='lg:text-3xl font-bold'>BIDESHGAMI LIMITED</p>
                    <p className='font-bold'>www.bideshgami.com</p>
                    <div className='border border-black rounded-xl  px-2'>
                        <p className='lg:text-2xl font-extrabold'>Office Address</p>
                    </div>
                    <p className='lg:text-xl text-[10px]'>12/5 Bashundhara R/A,Dhaka-1229</p>
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725267142/Bideshgami%20images/QR%20page/eqr70bcxkbyljddiylfw.png" alt="" className='' />
                </div>
                <div className='w-3/4 mx-auto'>
                    <Table/>
                </div>
            </div>
        </>
    );
};

export default QRpage;