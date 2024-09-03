import React from 'react';

const SafetyTips = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <div className="flex justify-center items-center flex-col lg:space-y-5">
                <div className="">
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725338735/Bideshgami%20images/Safety%20tips/nygvwffznednr2ire9md.png" alt="" />
                </div>
                <p className='lg:text-5xl text-3xl font-bold'>Stay safe at Bideshgami</p>
                <div className='text-center space-y-3 lg:text-xl'>
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
                <p className='lg:text-5xl text-3xl font-bold'>General safety advice</p>
            </div>

            <div className="lg:flex container mx-auto items-center justify-center gap-5 px-3 lg:my-32 pb-10">
                <div className="lg:w-1/2 text-center space-y-3">
                    <p className='lg:text-4xl text-2xl font-bold'>Verify Items in Person</p>
                    <p className=' text-center'>Always meet the seller and inspect the item thoroughly before proceeding with any payment</p>
                </div>

                <div className="lg:w-1/2 text-center ">
                    <p className='lg:text-4xl text-2xl font-bold'>While applying for a job</p>
                    <p className=' text-center'>
                        Research the job and the employer before you apply. Don’t give out personal information before meeting the employer in person. Avoid going to remote locations for an interview.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SafetyTips;