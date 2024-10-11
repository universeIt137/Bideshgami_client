import React from 'react';
import Container from '../../../shared/Container';

const SafetyTips = () => {
    window.scrollTo(0, 0);
    return (
       <div className='bg-gray-100 py-10'>
            <Container>
                <div className=' bg-white mainBoxShadow px-10 pb-10'>
                    <div className="flex justify-center items-center flex-col lg:space-y-5">
                        <div className="">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725338735/Bideshgami%20images/Safety%20tips/nygvwffznednr2ire9md.png" alt="" />
                        </div>
                        <p className='text-4xl font-bold'>Stay safe at Bideshgami</p>
                        <div className='text-center space-y-3'>
                            <p>At Bideshgami, we are 100% committed to ensuring your experience on our platform is as safe as possible.</p>
                            <p>Here are some tips on how to stay safe while shopping on Bideshgami.</p>
                        </div>
                    </div>
                    <div className='container mx-auto border-b-[1px] border-primary py-5'>
                    </div>
                    <div className="flex justify-center items-center flex-col lg:space-y-5 py-5">
                        <div className="">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725339719/Bideshgami%20images/Safety%20tips/j8atelouyejfkbnex8jr.png" alt="" />
                        </div>
                        <p className='text-4xl font-bold'>General safety advice</p>
                    </div>
        
                    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-5 px-3 lg:my-32 pb-10">
                        <div className="w-full space-y-3">
                            <p className='text-[28px] font-bold'>Verify Items in Person</p>
                            <p className='text-sm'>Always meet the seller and inspect the item thoroughly before proceeding with any payment</p>
                        </div>
        
                        <div className="w-full space-y-3">
                            <p className='text-[28px] font-bold'>While applying for a job</p>
                            <p className='text-sm'>
                                Research the job and the employer before you apply. Don’t give out personal information before meeting the employer in person. Avoid going to remote locations for an interview.
                            </p>
                        </div>
        
                    </div>
                </div>
            </Container>
       </div>
    );
};

export default SafetyTips;