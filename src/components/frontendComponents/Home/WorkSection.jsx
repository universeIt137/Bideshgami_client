import React from "react"
import { Helmet } from 'react-helmet-async';
import PriceCard from '../../../components/frontendComponents/PriceCard';
import { FaAngleDoubleRight } from 'react-icons/fa';

const WorkSection = () => {
  return (
    <div className="pt-12">
        <div className='min-h-screen'>
            <div className='container mx-auto'>            
                    {/* // other work */} 
                <div className='flex justify-between my-10'>
                    <p className='font-bold text-xl lg:text-3xl'>Work Permit updated content for github</p>
                    <p className='flex justify-center text-sm items-center gap-1 font-bold'>View All <FaAngleDoubleRight /></p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <PriceCard></PriceCard>
                    <PriceCard></PriceCard>
                    <PriceCard></PriceCard>
                    <PriceCard></PriceCard>
                </div>
                <div className='flex justify-between my-10'>
                    <p className='font-bold text-xl lg:text-3xl'>Student</p>
                    <p className='flex justify-center text-sm items-center gap-1 font-bold'>View All<FaAngleDoubleRight /></p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <PriceCard></PriceCard>
                    <PriceCard></PriceCard>
                    <PriceCard></PriceCard>
                    <PriceCard></PriceCard>
                </div>

                <div className='flex justify-between my-10'>
                    <p className='font-bold text-xl lg:text-3xl'>Hajj & Umrah</p>
                    <p className='flex justify-center text-sm items-center gap-1 font-bold'>View All<FaAngleDoubleRight /></p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <PriceCard></PriceCard>
                    <PriceCard></PriceCard>
                    <PriceCard></PriceCard>
                    <PriceCard></PriceCard>
                </div>


                <div className='flex justify-between my-10'>
                    <p className='font-bold text-xl lg:text-3xl'>Tour Package</p>
                    <p className='flex justify-center text-sm items-center gap-1 font-bold'>View All<FaAngleDoubleRight /></p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <PriceCard></PriceCard>
                    <PriceCard></PriceCard>
                    <PriceCard></PriceCard>
                    <PriceCard></PriceCard>
                </div>
            </div>
            

        </div>
    </div>
  )
};

export default WorkSection
