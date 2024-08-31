import React from 'react';

const AddCard = () => {
    return (
        <div className="">
            <div className="flex">
                {/* image */}
                <div className="w-2/6">
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725084821/Bideshgami%20images/Service%20Details/vqelbqkx47squmllpam8.png" className='w-full h-full' alt="" />
                </div>

                {/* informations */}
                <div className="w-4/6 bg-gray-200 lg:p-0 p-3">
                    <div className="lg:p-5">
                        <p className='lg:text-xl font-bold'>Italy Work Permit</p>

                        <div className="flex items-center gap-2">
                            <div className="bg-gray-400 px-2 rounded-lg">
                                <p className='text-white font-bold lg:text-xs text-[9px]'>MEMBER</p>
                            </div>
                            <div className="">
                                <img src={`https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725085841/Bideshgami%20images/Service%20Details/icons/rsahypup6cqnysfa2kc4.png`} className='lg:h-8 h-3' alt="" />
                            </div>
                            <p className='lg:text-xs font-bold text-primary text-[10px]'>VERIFIED ACCOUNT</p>
                        </div>
                        <p className='lg:text-xs text-[10px] text-gray-500'>Bideshgami Work Permit Visa</p>
                        <p className='lg:text-xl text-primary font-extrabold text-[10px]'>15,000 BDT</p>
                        <p className="text-end lg:text-xs text-[8px]">4 days</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCard;