/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import AllAirportDropDown from "./AllAirportDropDown";
import Departure from "./Departure";
import VisibleDay from "./VisibleDay";
import AddOrRemoveTrip from "./AddOrRemoveTrip";

const Destination = ({ tripType, data = {}, tripAmount, setTripAmount, id = 0 }) => {

    // Separate isOpen states for each dropdown
    const [isOpenFirstAirportDropdown, setIsOpenFirstAirportDropdown] = useState(false);
    const [isOpenSecondAirportDropdown, setIsOpenSecondAirportDropdown] = useState(false);
    
    const [openDeparture, setOpenDeparture] = useState(false);


    // Handle selection from the first airport dropdown
    const handleSelectAirport1 = (airport) => {
        const updatedTrip = tripAmount.map((item) =>
            item.id === data.id
                ? { ...item, selectedAirport1: airport }
                : item
        );
        setTripAmount(updatedTrip);
        setIsOpenFirstAirportDropdown(false);
        setIsOpenSecondAirportDropdown(true); // Open the second dropdown after selecting from the first
    };

    // Handle selection from the second airport dropdown
    const handleSelectAirport2 = (airport) => {
        const updatedTrip = tripAmount.map((item) =>
            item.id === data.id
                ? { ...item, selectedAirport2: airport }
                : item
        );
        setTripAmount(updatedTrip);
        setIsOpenSecondAirportDropdown(false);
        setOpenDeparture(true);
    };

    // Swap selected airports
    const handleToggleDesignation = () => {
        const updatedTrip = tripAmount.map((item) =>
            item.id === data.id
                ? {
                    ...item,
                    selectedAirport1: item.selectedAirport2,
                    selectedAirport2: item.selectedAirport1,
                }
                : item
        );
        setTripAmount(updatedTrip);
    };


    // Handle departure date change
    const handleDepartureDate = (date) => {
        const updatedTrip = tripAmount.map((item) =>
            item.id === data.id
                ? {
                    ...item,
                    departureDate: date,
                    returnDate: [
                        {
                            startDate: date,
                            endDate: null,
                            key: 'selection',
                        },
                    ],
                }
                : item
        );
        setTripAmount(updatedTrip);
        setOpenDeparture(false);

        if (tripType === 'roundTrip') {
            setOpenReturn(true);
            const returnUpdatedTrip = updatedTrip.map((item) =>
                item.id === data.id
                    ? {
                        ...item,
                        returnDate: [
                            {
                                startDate: date,
                                endDate: date,
                                key: 'selection',
                            },
                        ],
                    }
                    : item
            );
            setTripAmount(returnUpdatedTrip);
        } else if (id === 0) {
            setIsOpenTravelerDropDown(true);
        }
    };

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 pt-5">
            {/* From to section */}
            <div className="flex flex-col md:flex-row w-full">
                {/* first Airport  */}
                <div className="w-full relative">
                    <div
                        className={`border p-3 rounded-lg text-gray-500 w-1/2 relative ${isOpenFirstAirportDropdown ? "bg-gray-200" : "bg-white"
                            } cursor-pointer w-full`}
                        onClick={() => setIsOpenFirstAirportDropdown(true)}
                    >
                        <p>From</p>
                        <p className="lg:text-xl font-bold">
                            {data.selectedAirport1?.city}
                        </p>
                        <p className="text-[12px]">{data.selectedAirport1?.airportName}</p>
                    </div>
                    {isOpenFirstAirportDropdown && (
                        <div className="bg-white z-30 absolute w-full left-0">
                            <AllAirportDropDown
                                selectedAirport={data.selectedAirport1}
                                handleAirportSelection={handleSelectAirport1}
                                setIsOpen={setIsOpenFirstAirportDropdown}
                            />
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-center">
                    <p
                        onClick={handleToggleDesignation}
                        className="text-primary p-3 bg-white rotate-90 md:rotate-0 border rounded-[24px] -my-4 md:-my-0 ml-auto mr-10 md:-mx-10 shadow-2xl z-20 cursor-pointer"
                    >
                        <FaArrowRightArrowLeft />
                    </p>
                </div>
                {/* second Airport  */}
                <div className="w-full relative">
                    <div
                        className={`border p-3 rounded-lg text-gray-500 w-1/2 relative ${isOpenSecondAirportDropdown ? "bg-gray-200" : "bg-white"
                            } cursor-pointer w-full`}
                        onClick={() => setIsOpenSecondAirportDropdown(true)}
                    >
                        <div className="ml-3">
                            <p>To</p>
                            <p className="lg:text-xl font-bold">
                                {data.selectedAirport2?.city}
                            </p>
                            <p className="text-[12px]">{data.selectedAirport2?.airportName}</p>
                        </div>
                    </div>
                    {isOpenSecondAirportDropdown && (
                        <div className="bg-white z-30 absolute w-full left-0">
                            <AllAirportDropDown
                                selectedAirport={data.selectedAirport2}
                                handleAirportSelection={handleSelectAirport2}
                                setIsOpen={setIsOpenSecondAirportDropdown}
                            />
                        </div>
                    )}
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Departure return section */}
                <div className="flex w-full relative">
                    <div onClick={() => setOpenDeparture(true)} className={`border p-3 text-gray-500 w-full ${openDeparture ? "bg-gray-200" : "bg-white"}`}>
                        <p className="flex items-center gap-2">
                            Departure
                            <FaChevronDown />
                        </p>
                        <VisibleDay comingDay={data.departureDate} />
                    </div>
                    {openDeparture && (
                        <div className="bg-white z-30 absolute left-0 top-[100px] w-max ">
                            <Departure departureDate={data.departureDate} handleDepartureDate={handleDepartureDate} setIsOpen={setOpenDeparture} />
                        </div>
                    )}
                </div>

                {/* Booking class section */}
                <AddOrRemoveTrip id={id} tripAmount={tripAmount} setTripAmount={setTripAmount} data={data} />
            </div>
        </div>
    );
};

export default Destination;
