/* eslint-disable react/prop-types */
import arrow from '../../../../assets/icon/arrow.png'
import airport from '../../../../assets/icon/aiport.jpg'
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import FlightDetails from './FlightDetails';
import { getTimeDifference } from '../../../../timeDifferent';
import FlightDetailsTabs from '../components/FlightDetailsTabs';
import { Link } from 'react-router-dom';
const FlightCard = ({data}) => {
    const [bookNow, setBookNow] = useState(false)
    const {
        airline = "N/A",
        flightNumber = "N/A",
        aircraft = "N/A",
        operatedBy = "N/A",
        fareType = "N/A",
        availableSeats = 0,
        depart: {
          time: departTime = "N/A",
          date: departDate = "N/A",
          airport: departAirport = "N/A",
          terminal: departTerminal = "N/A",
          city: departCity = "N/A"
        } = {}, // default to empty object in case 'depart' is missing
        duration = 0,
        arrival: {
          time: arrivalTime = "N/A",
          date: arrivalDate = "N/A",
          airport: arrivalAirport = "N/A",
          city: arrivalCity = "N/A"
        } = {}, // default to empty object in case 'arrival' is missing
        price = 0,
        refundable = "Non-refundable",
        baggage: {
          checkIn: { unit: checkInUnit = 0, type: checkInType = "N/A" } = {}, // handle missing baggage checkIn
          cabin: { unit: cabinUnit = 0, type: cabinType = "N/A" } = {} // handle missing baggage cabin
        } = {} // handle missing baggage
      } = data || {}; // handle missing 'flightInfo' object

      const timeDifferent = getTimeDifference({time: departTime, date:departDate}, {time: arrivalTime, date:arrivalDate})
    return (
        <div >
            <div className=" bg-white rounded-xl rounded-b-none shadow-md overflow-hidden p-4 border-b border-black">
                <div className="flex">
                    {/* Airline logo and info */}
                    <div className="px-3 space-y-4">
                        <div className="flex items-center justify-center bg-primary w-16 h-16 rounded-full border border-primary overflow-hidden">
                            <img
                                src={airport}
                                alt="Biman Bangladesh Airlines"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <div className="tracking-wide text-sm text-gray-500">
                                {airline}
                            </div>
                            {/* <p className="text-green-500 text-sm font-semibold">Partially Refundable</p> */}
                        </div>
                    </div>
                    <div className="p-4 flex gap-10 justify-around w-full">

                        {/* Flight details */}
                        <div className="flex justify-between items-center py-4 w-full gap-5">
                            <div className="text-left">
                                <p className="text-xl font-bold">{departTime}</p>
                                <p className="text-sm text-gray-500">{departDate}</p>
                                <p className="text-gray-700">{departAirport}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-sm text-gray-500 w-max"> {timeDifferent}</span>

                                <img src={arrow} className='max-w-[120px]' alt="" />

                                <span className="text-xs text-gray-500">Non Stop</span>
                            </div>
                            <div className="">
                                <p className="text-xl font-bold">{arrivalTime}</p>
                                <p className="text-sm text-gray-500">{arrivalDate}</p>
                                <p className="text-gray-700">{arrivalAirport}</p>
                            </div>
                        </div>
                        {/* Price and button */}
                        <div className="flex justify-between items-center mt-4">
                            <p className="text-lg font-semibold text-primary w-max">
                                Price
                                <br />
                                BDT 4,275</p>
                            {/* <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                                Book Now
                            </button> */}
                        </div>

                    </div>

                </div>
                <div className='w-full max-w-[400px] h-0.5 mx-auto bg-gray-200'></div>
                <div className="flex">
                    {/* Airline logo and info */}
                    <div className="px-3 space-y-4">
                        <div className="flex items-center justify-center bg-primary w-16 h-16 rounded-full border border-primary overflow-hidden">
                            <img
                                src={airport}
                                alt="Biman Bangladesh Airlines"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <div className="tracking-wide text-sm text-gray-500">
                                Biman Bangladesh Airlines
                            </div>
                            <p className="text-green-500 text-sm font-semibold">Partially Refundable</p>
                        </div>
                    </div>
                    <div className="p-4 flex gap-10 justify-around w-full">

                        {/* Flight details */}
                        <div className="flex justify-between items-center py-4 w-full gap-5">
                            <div className="text-left">
                                <p className="text-xl font-bold">{departTime}</p>
                                <p className="text-sm text-gray-500">{departDate}</p>
                                <p className="text-gray-700">{departAirport}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-sm text-gray-500 w-max">{timeDifferent}</span>

                                <img src={arrow} className='max-w-[120px]' alt="" />

                                <span className="text-xs text-gray-500">Non Stop</span>
                            </div>
                            <div className="">
                                <p className="text-xl font-bold">{arrivalTime}</p>
                                <p className="text-sm text-gray-500">{arrivalDate}</p>
                                <p className="text-gray-700">{arrivalAirport}</p>
                            </div>
                        </div>
                        {/* Price and button */}
                        <div className="flex justify-between items-center mt-4">
                            <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary w-max">
                                
                                <Link to={'/air-ticket/book-now'}>Book Now</Link>
                            </button>

                        </div>

                    </div>

                </div>
                <div className='text-end px-3'>
                    <div onClick={() => setBookNow(!bookNow)} className="bg-primary/10 border-primary border text-black font-semibold py-2 px-4 rounded hover:bg-primary/20 w-max flex items-center gap-2 ml-auto cursor-pointer">
                        Flight Details <p className={`${bookNow ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}><FaChevronDown /></p>
                    </div>
                </div>
            </div>
            <div
            className={`bg-white shadow-md overflow-hidden ${bookNow ? 'max-h-[3000px]  p-10' : 'max-h-[0px]  p-0'} transition-all duration-500`}
            >
                {/* <div className='pb-6 text-sm'>
                    <button className='border-[1.5px] border-gray-600 px-2 py-2 rounded-lg active:scale-90 transition-all duration-300 w-[120px]'>Flight Details</button>
                    <button className='border-[1.5px] border-gray-600 px-2 py-2 rounded-lg active:scale-90 transition-all duration-300 w-[120px]'>Fare Summery</button>
                    <button className='border-[1.5px] border-gray-600 px-2 py-2 rounded-lg active:scale-90 transition-all duration-300 w-[120px]'>Flight Rules</button>
                </div> */}
                {/* <FlightDetails /> */}
                <FlightDetailsTabs></FlightDetailsTabs>
            </div>
        </div>
    );
};

export default FlightCard;