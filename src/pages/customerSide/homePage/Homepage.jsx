import React from 'react';
import { Helmet } from 'react-helmet-async';
import PriceCard from '../../../components/frontendComponents/PriceCard';
import { FaAngleDoubleRight } from 'react-icons/fa';



const Homepage = () => {
    return (

        <div className='min-h-screen w-10/12 mx-auto py-20'>
            <div className='flex justify-between my-10'>
                <p className='font-bold text-3xl'>Work Permit</p>
                <p className='flex justify-center items-center gap-1 font-bold'>View All<FaAngleDoubleRight /></p>
            </div>
            <div className="grid grid-cols-4 gap-8">
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
            </div>

            <div className='flex justify-between my-10'>
                <p className='font-bold text-3xl'>Student</p>
                <p className='flex justify-center items-center gap-1 font-bold'>View All<FaAngleDoubleRight /></p>
            </div>
            <div className="grid grid-cols-4 gap-8">
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
            </div>


            <div className='flex justify-between my-10'>
                <p className='font-bold text-3xl'>Hajj & Umrah</p>
                <p className='flex justify-center items-center gap-1 font-bold'>View All<FaAngleDoubleRight /></p>
            </div>
            <div className="grid grid-cols-4 gap-8">
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
            </div>


            <div className='flex justify-between my-10'>
                <p className='font-bold text-3xl'>Tour Package</p>
                <p className='flex justify-center items-center gap-1 font-bold'>View All<FaAngleDoubleRight /></p>
            </div>
            <div className="grid grid-cols-4 gap-8">
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
                <PriceCard></PriceCard>
            </div>

        <div>
           
            
        </div>
    );
};

export default Homepage;