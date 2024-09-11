/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

const Return = ({ setIsOpen, returnDate, setReturnDate,handleReturnDate }) => {
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

    const handleDateChange = (item) => {
        // Allow only the endDate to be updated, keeping startDate fixed
        const newSelection = {
            ...item.selection,
            startDate: returnDate[0].startDate // Keep the startDate unchanged
        };
        handleReturnDate([newSelection])
        // setReturnDate();
    };
    console.log(returnDate);
    
    return (
        <div className="allAirportDropDown rounded-lg bg-white overflow-hidden" ref={dropdownRef}>
            <DateRange
                editableDateInputs={true}
                onChange={handleDateChange}
                moveRangeOnFirstSelection={false}
                ranges={returnDate}
                minDate={returnDate[0].startDate} // Prevent selection before startDate
            />
        </div>
    );
};

export default Return;