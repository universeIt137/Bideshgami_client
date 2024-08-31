import React from 'react';
import AddCard from './AddCard';

const adds = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725084821/Bideshgami%20images/Service%20Details/vqelbqkx47squmllpam8.png",
        logo: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725080407/Bideshgami%20images/Service%20Details/icons/ogiuilq29xkhgxgvavnd.png",
        role: "MEMBER",
        account_type: "VERIFIED ACCOUNT",
        visa_type: "Bideshgami Work Permit Visa",
        price: "15,000 BDT",
        timeStamp: "4 days"
    }
]

const AddSection = () => {
    return (
        <div className='border container mx-auto'>
            <div className=" border-b-2 w-11/12 mx-auto">
                <p className='p-10 text-2xl text-gray-500 '>Similar Ads</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 p-10">
                <AddCard></AddCard>
                <AddCard></AddCard>
                <AddCard></AddCard>
                <AddCard></AddCard>
                
            </div>


        </div>
    );
};

export default AddSection;