
import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { airports } from "../../../airportArray";
import AllAirportDropDown from "./AllAirportDropDown";
import TravelerDropDown from "./TravelerDropDown";

const Destination = () => {
    const [selectedAirport1, setSelectedAirport1] = useState(airports[0]);
    const [selectedAirport2, setSelectedAirport2] = useState(airports[1]);
    const [travelers, setTravelers] = useState({
        adults: 1,
        children: 0,
        kids: 0,
        infants: 0
    });
    const [isOpenFirstAirportDropdown, setIsOpenFirstAirportDropdown] = useState(false);
    const [isOpenSecondAirportDropdown, setIsOpenSecondAirportDropdown] = useState(false);
    const [isOpenTravelerDropDown, setIsOpenTravelerDropDown] = useState(false);


    // Handle clicking outside the dropdown to close it

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
        setIsOpenSecondAirportDropdown(false);  // Close the second dropdown
    };

    const handleToggleDesignation = () => {
        setSelectedAirport1(selectedAirport2);
        setSelectedAirport2(selectedAirport1);
    };

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

            {/* Depature return section */}
            <div className="grid grid-cols-2 gap-2">
                <div className="flex w-full">
                    <div className="border p-3 rounded-l-lg text-gray-400 w-1/2">
                        <p className="flex items-center gap-2">
                            Depature
                            <FaChevronDown />
                        </p>
                        <p className="lg:text-xl font-bold">Aug 24</p>
                        <p className="text-[12px]">Wednesday</p>
                    </div>

                    <div className="border p-3 rounded-r-lg text-gray-400 w-1/2">
                        <p className="flex items-center gap-2">
                            Return <FaChevronDown />
                        </p>
                        <p className="text-[12px]">Tap to book return ticket</p>
                        <p className="text-[12px]">for more savings</p>
                    </div>
                </div>

                {/* Booking class section */}
                <div className="flex w-full relative">
                    <div onClick={() => setIsOpenTravelerDropDown(true)} className="border p-3 rounded-lg text-gray-500 w-full cursor-pointer">
                        <p className="flex items-center gap-2">Travelers & Booking Class</p>
                        <p className="lg:text-xl font-bold">{Object.values(travelers).reduce((a, b) => a + b)} Travelers</p>
                        <p className="">Economy</p>
                    </div>
                    {
                        isOpenTravelerDropDown && <div className="w-full absolute left-0 top-[100px] z-30"><TravelerDropDown travelers={travelers} setTravelers={setTravelers} setIsOpen={setIsOpenTravelerDropDown} /></div>
                    }
                </div>

            </div>

        </div>
    );
};

export default Destination;
