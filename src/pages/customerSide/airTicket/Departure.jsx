/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { Calendar } from "react-date-range";

const Departure = ({ setIsOpen, departureDate, handleDepartureDate }) => {
    const dropdownRef = useRef(null);

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
    return (
        <div className="allAirportDropDown rounded-lg bg-white overflow-hidden" ref={dropdownRef}>
            <Calendar onChange={item => handleDepartureDate(item)}
                date={departureDate} />
        </div>
    );
};

export default Departure;