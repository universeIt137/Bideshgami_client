/* eslint-disable react/prop-types */
import { useState } from 'react';
import TravelerDropDown from './TravelerDropDown';

const TravelerBooking = ({
    isOpenTravelerDropDown,
    setIsOpenTravelerDropDown,
    travelers,
    setTravelers,
    bookingClassType,
    setBookingClassType
}) => {
    // Increment traveler count for the selected category

    const handleIncrement = (category) => {
        setTravelers({
            ...travelers,
            [category]: travelers[category] + 1,
        });
    };

    // Decrement traveler count for the selected category, ensuring it doesn't go below zero
    const handleDecrement = (category) => {
        setTravelers({
            ...travelers,
            [category]: travelers[category] > 0 ? travelers[category] - 1 : 0,
        });
    };

    // Handle booking class change (e.g., Economy, Business, First Class, etc.)
    const handleBookingClassChange = (type) => {
        setBookingClassType(type)
    };

    return (
        <div className="flex w-full relative">
            <div
                onClick={() => setIsOpenTravelerDropDown(true)}
                className="border p-3 rounded-lg text-gray-500 w-full cursor-pointer"
            >
                <p className="flex items-center gap-2">Travelers & Booking Class</p>
                <p className="lg:text-xl font-bold">
                    {Object.values(travelers).reduce((a, b) => a + b)} Travelers
                </p>
                <p>{bookingClassType || 'Economy'}</p> {/* Default to 'Economy' if bookingClass is undefined */}
            </div>

            {isOpenTravelerDropDown && (
                <div className="w-full absolute left-0 top-[100px] z-30">
                    <TravelerDropDown
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        handleBookingClassChange={handleBookingClassChange}
                        travelers={travelers}
                        setIsOpen={setIsOpenTravelerDropDown}
                        bookingClassType={bookingClassType}
                    />
                </div>
            )}
        </div>
    );
};

export default TravelerBooking;
