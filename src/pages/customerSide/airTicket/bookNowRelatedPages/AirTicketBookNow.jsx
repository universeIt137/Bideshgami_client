import React from 'react';
import AirTicketCard from './components/AirTicketCard';
import Container from '../../../../shared/Container';

const AirTicketBookNow = () => {
    return (
        <div className='bg-white'>
            <div className='w-10/12 mx-auto'>
                <div className=" flex items-center justify-between py-5 lg:w-9/12">
                    <p className="text-2xl font-bold text-primary"> Review Your Booking</p>
                    <p>{`Flight Selection > Booking > Payment`} </p>
                </div>
                <div className='flex gap-10'>
                    <div className="lg:w-3/4 ">

                        <AirTicketCard></AirTicketCard>
                    </div>
                    <div className="border bg-white rounded-lg lg:w-1/4">
                        dlsl
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AirTicketBookNow;