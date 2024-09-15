/* eslint-disable react/prop-types */
import { IoIosAirplane, IoMdSearch } from "react-icons/io";
import { airports } from "../../../airportArray";
import { IoAirplane, IoSearch } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

const AllAirportDropDown = ({ selectedAirport, handleAirportSelection, setIsOpen }) => {
    const dropdownRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredAirports, setFilteredAirports] = useState(airports);

    useEffect(() => {
        // Close the dropdown when clicking outside of it
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

    useEffect(() => {
        // Filter the airports based on the search term
        const filtered = airports.filter((airport) =>
            airport.airportName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            airport.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            airport.airportCode.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredAirports(filtered);
    }, [searchTerm]);

    const handleChangeAirport = (airport) => {
        handleAirportSelection(airport);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div ref={dropdownRef} className="allAirportDropDown rounded-lg bg-white overflow-hidden">
            <div className="flex justify-center items-center gap-2 bg-white border-b border-black px-1 pl-2">
                <IoSearch  className="min-w-[20px] text-primary" />
                <input
                    placeholder="Type for the airport name "
                    className="w-full mx-auto text-sm font-medium py-2 rounded-sm outline-none"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="w-full h-[350px] overflow-y-auto space-y-3">
                {filteredAirports.length > 0 ? (
                    filteredAirports.map((item, idx) => (
                        <div
                            onClick={() => handleChangeAirport(item)}
                            className={`flex items-center justify-between gap-2 ${selectedAirport?.airportCode === item?.airportCode && 'bg-gray-100'} p-1 hover:bg-gray-100 rounded-sm ml-1 cursor-pointer`}
                            key={idx}
                        >
                            <div className="flex items-center gap-1">
                                <IoAirplane className="min-w-[20px] text-primary" />
                                <div>
                                    <p className="text-xs text-black font-bold">{item?.airportName}</p>
                                    <p className="text-xs text-gray-700">{item?.city}</p>
                                </div>
                            </div>
                            <p className="text-sm">{item?.airportCode}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-gray-500 text-center py-4">No airports found</p>
                )}
            </div>
        </div>
    );
};

export default AllAirportDropDown;
