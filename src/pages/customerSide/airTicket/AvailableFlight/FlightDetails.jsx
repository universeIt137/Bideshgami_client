import React from 'react';
import arrow from '../../../../assets/icon/arrow.png'
import airport from '../../../../assets/icon/aiport.jpg'
const FlightDetails = () => {
    return (
        <div className="mx-auto bg-white shadow-md rounded-md border-2 border-gray-400">
            <p className="font-semibold text-lg border-b-2 border-gray-400 py-3 px-2">Dhaka to Chittagong, 18 Aug 2024</p>
            <div className="flex gap-5 mb-4 p-5">
                <div className="flex items-center justify-center bg-primary w-16 h-16 rounded-full border border-primary overflow-hidden">
                    <img
                        src={airport}
                        alt="Biman Bangladesh Airlines"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>

                    <p className="text-black">Biman Bangladesh Airlines <span className=" text-gray-500">BG | 617</span></p>
                    <div className="flex items-center justify-between mb-4">
                        <div className='pt-3'>
                            <p className="text-black">Aircraft : <span className="font-semibold">DHC8 Dash 8</span></p>
                            <p className="text-black">Operated by : BG</p>
                            <p className="text-black">Economy (G)</p>
                            <p className="text-black">Available seats: <span className="font-semibold">9</span></p>
                        </div>
                    </div>
                </div>

            </div>



            <div className="flex justify-between mb-4 p-5 text-sm">
                <div className="">
                    <p className="text-lg font-semibold pb-4">19:45</p>
                    <p className="text-gray-500">Sun, 18 Aug 2024</p>
                    <p className="text-gray-500">DAC</p>
                    <p className="text-gray-500">Hazrat Shahjalal Int'l</p>
                    <p className="text-gray-500">Dhaka, Bangladesh</p>
                </div>

                <div className="text-center space-y-1">
                    <p className="text-gray-500">1 hour 0 minute</p>
                    <div className='w-[60px] h-[1.5px] bg-primary mx-auto'></div>
                </div>

                <div className="">
                    <p className="text-lg font-semibold pb-4">20:45</p>
                    <p className="text-gray-500">Sun, 18 Aug 2024</p>
                    <p className="text-gray-500">CGP</p>
                    <p className="text-gray-500">Patenga</p>
                    <p className="text-gray-500">Chittagong, Bangladesh</p>
                </div>
                <div className="text-center">
                    <p className="font-semibold pb-4 text-lg">Baggage</p>
                    <p className="text-gray-500">Adult</p>
                </div>
                <div className="text-center">
                    <p className="font-semibold pb-4 text-lg">Check In</p>
                    <p className="text-gray-500">20 Kg(s)</p>
                </div>
                <div className="text-center">
                    <p className="font-semibold pb-4 text-lg">Cabin</p>
                    <p className="text-gray-500">7 Kg(s)</p>
                </div>
            </div>
        </div>
    );
};

export default FlightDetails;