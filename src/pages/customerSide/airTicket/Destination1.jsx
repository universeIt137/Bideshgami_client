/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import AllAirportDropDown from "./AllAirportDropDown";
import Departure from "./Departure";
import VisibleDay from "./VisibleDay";
import TravelerBooking from "./TravelerBooking";
import ReturnBooking from "./ReturnBooking";

const Destination1 = ({ tripType, setTripType, trip1, setTrip1, travelers, setTravelers, bookingClassType, setBookingClassType }) => {

    // Separate isOpen states for each dropdown
    const [isOpenFirstAirportDropdown, setIsOpenFirstAirportDropdown] = useState(false);
    const [isOpenSecondAirportDropdown, setIsOpenSecondAirportDropdown] = useState(false);
    const [isOpenTravelerDropDown, setIsOpenTravelerDropDown] = useState(false);
    const [openDeparture, setOpenDeparture] = useState(false);
    const [openReturn, setOpenReturn] = useState(false);

    // Update returnDate when tripType changes
    useEffect(() => {
        if (tripType !== 'roundTrip') {
            const updatedTrip = { ...trip1[0], returnDate: [{ startDate: trip1[0].departureDate, endDate: null, key: 'selection' }] };
            setTrip1([updatedTrip]);
        } else {
            const updatedTrip = { ...trip1[0], returnDate: [{ startDate: trip1[0].departureDate, endDate: trip1[0].departureDate, key: 'selection' }] };
            setTrip1([updatedTrip]);
        }
    }, [tripType]);

    // Handle selection from the first airport dropdown
    const handleSelectAirport1 = (airport) => {
        const updatedTrip = { ...trip1[0], selectedAirport1: airport };
        setTrip1([updatedTrip]);
        setIsOpenFirstAirportDropdown(false);
        setIsOpenSecondAirportDropdown(true); // Open the second dropdown after selecting from the first
    };

    // Handle selection from the second airport dropdown
    const handleSelectAirport2 = (airport) => {
        const updatedTrip = { ...trip1[0], selectedAirport2: airport };
        setTrip1([updatedTrip]);
        setIsOpenSecondAirportDropdown(false);
        setOpenDeparture(true);
    };

    // Swap selected airports
    const handleToggleDesignation = () => {
        const updatedTrip = {
            ...trip1[0],
            selectedAirport1: trip1[0].selectedAirport2,
            selectedAirport2: trip1[0].selectedAirport1
        };
        setTrip1([updatedTrip]);
    };

    // Handle return date change
    const handleReturnDate = (date) => {
        const updatedTrip = { ...trip1[0], returnDate: date };
        setTrip1([updatedTrip]);
        setOpenReturn(false);
        setIsOpenTravelerDropDown(true);
    };

    // Handle departure date change
    const handleDepartureDate = (date) => {
        const updatedTrip = {
            ...trip1[0],
            departureDate: date,
            returnDate: [{ startDate: date, endDate: null, key: 'selection' }],
        };
        setTrip1([updatedTrip]);
        setOpenDeparture(false);

        if (tripType === 'roundTrip') {
            setOpenReturn(true);
            const returnUpdatedTrip = { ...updatedTrip, returnDate: [{ startDate: date, endDate: date, key: 'selection' }] };
            setTrip1([returnUpdatedTrip]);
        }
        setIsOpenTravelerDropDown(true);
    };

    return (
        <div className="grid grid-cols-2 gap-2 pt-5">
            {/* From to section */}
            <div className="flex w-full">
                {/* first Airport */}
                <div className="w-full relative">
                    <div
                        className={`border p-3 rounded-lg text-gray-500 w-1/2 relative ${isOpenFirstAirportDropdown ? "bg-gray-200" : "bg-white"} cursor-pointer w-full`}
                        onClick={() => setIsOpenFirstAirportDropdown(true)}
                    >
                        <p>From</p>
                        <p className="lg:text-xl font-bold">{trip1[0]?.selectedAirport1?.city}</p>
                        <p className="text-[12px]">{trip1[0]?.selectedAirport1?.airportName}</p>
                    </div>
                    {isOpenFirstAirportDropdown && (
                        <div className="bg-white z-30 absolute w-full left-0">
                            <AllAirportDropDown
                                selectedAirport={trip1[0]?.selectedAirport1}
                                handleAirportSelection={handleSelectAirport1}
                                setIsOpen={setIsOpenFirstAirportDropdown}
                            />
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-center">
                    <p
                        onClick={handleToggleDesignation}
                        className="text-primary p-3 bg-white border rounded-[24px] -mx-10 shadow-2xl z-20 cursor-pointer"
                    >
                        <FaArrowRightArrowLeft />
                    </p>
                </div>

                {/* second Airport */}
                <div className="w-full relative">
                    <div
                        className={`border p-3 rounded-lg text-gray-500 w-1/2 relative ${isOpenSecondAirportDropdown ? "bg-gray-200" : "bg-white"} cursor-pointer w-full`}
                        onClick={() => setIsOpenSecondAirportDropdown(true)}
                    >
                        <div className="ml-3">
                            <p>To</p>
                            <p className="lg:text-xl font-bold">{trip1[0]?.selectedAirport2?.city}</p>
                            <p className="text-[12px]">{trip1[0]?.selectedAirport2?.airportName}</p>
                        </div>
                    </div>
                    {isOpenSecondAirportDropdown && (
                        <div className="bg-white z-30 absolute w-full left-0">
                            <AllAirportDropDown
                                selectedAirport={trip1[0]?.selectedAirport2}
                                handleAirportSelection={handleSelectAirport2}
                                setIsOpen={setIsOpenSecondAirportDropdown}
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
                {/* Departure return section */}
                <div className="flex w-full relative">
                    <div onClick={() => setOpenDeparture(true)} className={`border p-3 text-gray-500 ${tripType === 'multiCity' ? 'rounded-lg w-full' : 'rounded-l-lg w-1/2'} ${openDeparture ? "bg-gray-200" : "bg-white"}`}>
                        <p className="flex items-center gap-2">
                            Departure
                            <FaChevronDown />
                        </p>
                        <VisibleDay comingDay={trip1[0]?.departureDate} />
                    </div>
                    {openDeparture && (
                        <div className="bg-white z-30 absolute left-0 top-[100px] w-max">
                            <Departure departureDate={trip1[0]?.departureDate} handleDepartureDate={handleDepartureDate} setIsOpen={setOpenDeparture} />
                        </div>
                    )}
                    {tripType !== 'multiCity' && (
                        <ReturnBooking
                            openReturn={openReturn}
                            data={trip1[0]}
                            handleReturnDate={handleReturnDate}
                            setOpenReturn={setOpenReturn}
                            tripAmount={trip1}
                            setTripAmount={setTrip1}
                            tripType={tripType}
                            setTripType={setTripType}
                        />
                    )}
                </div>

                {/* Booking class section */}
                <TravelerBooking
                    travelers={travelers}
                    setTravelers={setTravelers}
                    isOpenTravelerDropDown={isOpenTravelerDropDown}
                    setIsOpenTravelerDropDown={setIsOpenTravelerDropDown}
                    bookingClassType={bookingClassType}
                    setBookingClassType={setBookingClassType}
                />
            </div>
        </div>
    );
};

export default Destination1;
