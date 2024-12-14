import React from 'react';

const AddCard = () => {
    return (
        <div className="">
            <div className="flex h-[120px] w-full bg-gray-200">
                {/* image */}
                <div className="w-[136px] min-w-[136px]">
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725084821/Bideshgami%20images/Service%20Details/vqelbqkx47squmllpam8.png" className='w-full h-full object-cover' alt="" />
                </div>

                {/* informations */}
                <div className="  w-full">
                    <div className="p-2 px-5">
                        <p className='lg:text-base font-bold'>Italy Work Permit</p>

                        <div className="flex items-center gap-2">
                            <div className="bg-gray-400 px-2 rounded-lg">
                                <p className='text-white font-extrabold  text-[9px]'>MEMBER</p>
                            </div>
                            <div className="">
                                <img src={`https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725085841/Bideshgami%20images/Service%20Details/icons/rsahypup6cqnysfa2kc4.png`} className='h-5' alt="" />
                            </div>
                            <p className='lg:text-xs font-extrabold text-primary text-[9px]'>VERIFIED ACCOUNT</p>
                        </div>
                        <p className='lg:text-xs text-[10px] text-gray-500'>Bideshgami Work Permit Visa</p>
                        <p className='text-sm text-primary font-extrabold'>15,000 BDT</p>
                        <p className="text-end lg:text-xl text-gray-600 font-light">4 days</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCard;