/* eslint-disable react/prop-types */
import { IoIosAirplane } from "react-icons/io";
import { airports } from "../../../airportArray";
import { IoAirplane } from "react-icons/io5";
import { useEffect, useRef } from "react";

const AllAirportDropDown = ({ selectedAirport, handleAirportSelection, setIsOpen }) => {
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const handleChangeAirport = (airport) => {
        handleAirportSelection(airport)
    }


    return (
        <div ref={dropdownRef} className="w-full h-[350px] shadow-xl allAirportDropDown rounded-lg   bg-white overflow-y-auto  space-y-3">
            {
                airports?.map((item, idx) => <div onClick={() => handleChangeAirport(item)} className={`flex items-center justify-between gap-2 ${selectedAirport?.airportCode === item?.airportCode && 'bg-gray-100'} p-1 hover:bg-gray-100 rounded-sm ml-1 cursor-pointer`} key={idx}>

                    <div className="flex items-center gap-1">
                        <IoAirplane className="min-w-[20px] text-primary" />
                        <div>
                            <p className="text-xs text-black font-bold">{item?.airportName}</p>
                            <p className="text-xs text-gray-700">{item?.city}</p>
                        </div>
                    </div>
                    <p className="text-sm">{item?.airportCode}</p>
                </div>)
            }
        </div>
    );
};

export default AllAirportDropDown;