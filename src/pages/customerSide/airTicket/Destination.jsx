
import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { airports } from "../../../airportArray";
import AllAirportDropDown from "./AllAirportDropDown";
import TravelerDropDown from "./TravelerDropDown";
import Departure from "./Departure";
import VisibleDay from "./VisibleDay";
import Return from "./Return";

const Destination = ({ tripType, setTripType }) => {
    const [selectedAirport1, setSelectedAirport1] = useState(airports[0]);
    const [selectedAirport2, setSelectedAirport2] = useState(airports[1]);
    const [travelers, setTravelers] = useState({
        adults: 1,
        children: 0,
        kids: 0,
        infants: 0
    });
    const [bookingClass, setBookingClass] = useState('Economy');
    const [isOpenFirstAirportDropdown, setIsOpenFirstAirportDropdown] = useState(false);
    const [isOpenSecondAirportDropdown, setIsOpenSecondAirportDropdown] = useState(false);
    const [isOpenTravelerDropDown, setIsOpenTravelerDropDown] = useState(false);
    const [openDeparture, setOpenDeparture] = useState(false);
    const [departureDate, setDepartureDate] = useState(new Date());
    const [openReturn, setOpenReturn] = useState(false);
    const [returnDate, setReturnDate] = useState([
        {
            startDate: departureDate,
            endDate: null,
            key: 'selection'
        }
    ]);
    // Handle clicking outside the dropdown to close it
    useEffect(() => {

        if (tripType !== 'roundTrip') {
            setReturnDate([
                {
                    startDate: departureDate,
                    endDate: null,
                    key: 'selection'
                }
            ])
        }

    }, [tripType])
    const toggleDropdown1 = () => {
        setIsOpenFirstAirportDropdown(!isOpenFirstAirportDropdown);
        setIsOpenSecondAirportDropdown(false); // Close the second dropdown when the first is clicked
    };

    const toggleDropdown2 = () => {
        setIsOpenSecondAirportDropdown(!isOpenSecondAirportDropdown);
        setIsOpenFirstAirportDropdown(false); // Close the first dropdown when the second is clicked
    };

    // Handle selection from the first dropdown
    const handleSelectAirport1 = (airport) => {
        setSelectedAirport1(airport);
        setIsOpenFirstAirportDropdown(false); // Close the first dropdown
        setIsOpenSecondAirportDropdown(true);  // Open the second dropdown after selecting from the first
    };

    // Handle selection from the second dropdown
    const handleSelectAirport2 = (airport) => {
        setSelectedAirport2(airport);
        setIsOpenSecondAirportDropdown(false);
        setOpenDeparture(true)  // Close the second dropdown
    };

    const handleToggleDesignation = () => {
        setSelectedAirport1(selectedAirport2);
        setSelectedAirport2(selectedAirport1);
    };
    const handleOpenReturnDate = () => {
        setOpenReturn(true)
        if (returnDate[0]?.endDate === null) {
            setReturnDate([
                {
                    startDate: departureDate,
                    endDate: departureDate,
                    key: 'selection'
                }
            ])
        }
        if (tripType === 'oneWay') {
            setTripType('roundTrip')
        }
    }
    const handleDepartureDate = (date) => {
        setDepartureDate(date)
        setOpenDeparture(false)
        setReturnDate([
            {
                startDate: departureDate,
                endDate: null,
                key: 'selection'
            }
        ])
        if (tripType === 'roundTrip') {
            setOpenReturn(true)

            setReturnDate([
                {
                    startDate: date,
                    endDate: date,
                    key: 'selection'
                }
            ])

        } else {
            setIsOpenTravelerDropDown(true)
        }
    }

    const handleReturnDate = (date) => {
        setReturnDate(date)
        setOpenReturn(false)
        setIsOpenTravelerDropDown(true)
    }
    return (
        <div className="grid grid-cols-2 gap-2 pt-5 ">
            {/* from to section */}
            <div className="flex w-full">
                <div className="w-full relative">
                    <div

                        className={`border p-3 rounded-lg text-gray-500 w-1/2 relative ${isOpenFirstAirportDropdown ? "bg-gray-200" : "bg-white"} cursor-pointer w-full`}
                        onClick={toggleDropdown1} // Toggle first dropdown
                    >
                        <p>From</p>
                        <p className="lg:text-xl font-bold">{selectedAirport1?.city}</p>
                        <p className="text-[12px]">{selectedAirport1?.airportName}</p>

                    </div>
                    {isOpenFirstAirportDropdown && (
                        <div className="bg-white z-30 absolute w-full left-0">
                            <AllAirportDropDown selectedAirport={selectedAirport1} handleAirportSelection={handleSelectAirport1} setIsOpen={setIsOpenFirstAirportDropdown} />
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-center">
                    <p
                        onClick={handleToggleDesignation}
                        className="text-primary p-3 bg-white border rounded-[24px] -mx-10 shadow-2xl z-20 cursor-pointer "
                    >
                        <FaArrowRightArrowLeft />
                    </p>
                </div>

                <div className="w-full relative">
                    <div

                        className={`border p-3 rounded-lg text-gray-500 w-1/2 relative ${isOpenSecondAirportDropdown ? "bg-gray-200" : "bg-white"} cursor-pointer w-full`}
                        onClick={toggleDropdown2} // Toggle second dropdown
                    >
                        <div className="ml-3">
                            <p>To</p>
                            <p className="lg:text-xl font-bold">{selectedAirport2?.city}</p>
                            <p className="text-[12px]">{selectedAirport2?.airportName}</p>
                        </div>

                    </div>
                    {isOpenSecondAirportDropdown && (
                        <div className="bg-white z-30 absolute w-full left-0">
                            <AllAirportDropDown selectedAirport={selectedAirport2} handleAirportSelection={handleSelectAirport2} setIsOpen={setIsOpenSecondAirportDropdown} />
                        </div>
                    )}
                </div>
            </div>

            {/* Departure return section */}
            <div className="grid grid-cols-2 gap-2">
                <div className="flex w-full relative">
                    <div onClick={() => setOpenDeparture(true)} className={`border p-3 rounded-l-lg text-gray-500 w-1/2 ${openDeparture ? "bg-gray-200" : "bg-white"}`}>
                        <p className="flex items-center gap-2">
                            Departure
                            <FaChevronDown />
                        </p>
                        <VisibleDay comingDay={departureDate} />

                    </div>
                    {openDeparture && (
                        <div className="bg-white z-30 absolute left-0 top-[100px] w-max">
                            <Departure setDepartureDate={setDepartureDate} departureDate={departureDate} handleDepartureDate={handleDepartureDate} setIsOpen={setOpenDeparture} />
                        </div>
                    )}
                    <div onClick={handleOpenReturnDate} className={`border p-3 rounded-r-lg text-gray-500 w-1/2 ${openReturn ? "bg-gray-200" : "bg-white"}`}>
                        <p className="flex items-center gap-2">
                            Return <FaChevronDown />
                        </p>
                        {
                            returnDate[0]?.endDate === null ? <>
                                <p className="text-[12px]">Tap to book return ticket</p>
                                <p className="text-[12px]">for more savings</p>
                            </> : <VisibleDay comingDay={returnDate[0]?.endDate} />
                        }
                    </div>
                    {openReturn && (
                        <div className="bg-white z-30 absolute left-0 top-[100px] w-max">
                            <Return handleReturnDate={handleReturnDate} setReturnDate={setReturnDate} returnDate={returnDate} setIsOpen={setOpenReturn} />
                        </div>
                    )}
                </div>

                {/* Booking class section */}
                <div className="flex w-full relative">
                    <div onClick={() => setIsOpenTravelerDropDown(true)} className="border p-3 rounded-lg text-gray-500 w-full cursor-pointer">
                        <p className="flex items-center gap-2">Travelers & Booking Class</p>
                        <p className="lg:text-xl font-bold">{Object.values(travelers).reduce((a, b) => a + b)} Travelers</p>
                        <p className="">{bookingClass}</p>
                    </div>
                    {
                        isOpenTravelerDropDown && <div className="w-full absolute left-0 top-[100px] z-30"><TravelerDropDown travelers={travelers} bookingClass={bookingClass} setBookingClass={setBookingClass} setTravelers={setTravelers} setIsOpen={setIsOpenTravelerDropDown} /></div>
                    }
                </div>

            </div>

        </div>
    );
};

export default Destination;
