/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const TravelerDropDown = ({ setIsOpen, handleIncrement, handleDecrement, handleBookingClassChange, travelers, bookingClassType = '' }) => {
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
    }, [setIsOpen]);

    const isBookingFull = Object.values(travelers).reduce((a, b) => a + b, 0) >= 9;

    const travelerCategories = {
        adults: '12 years and above',
        children: '5 years - under 12 years',
        kids: '2 years - under 5 years',
        infants: 'below 2 years',
    };

    return (
        <div ref={dropdownRef} className="bg-white p-3 rounded-lg shadow-lg w-full min-w-max">
            <h2 className="text-sm font-bold">Travelers</h2>
            {isBookingFull && <p className="text-sm text-red-500 mb-4 font-medium">Maximum 9 passengers are allowed per booking</p>}

            <div className="space-y-4">
                {Object.keys(travelers).map((category, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <div>
                            <p className="capitalize text-gray-500">{category}</p>
                            <p className='text-xs text-black'>{travelerCategories[category]}</p>
                        </div>
                        <div className="flex items-center space-x-2 gap-3">
                            <button
                                className="text-2xl"
                                onClick={() => handleDecrement(category)}
                                disabled={travelers[category] === 0}
                            >
                                <FiMinus />
                            </button>
                            <span className="text-lg font-medium">{travelers[category]}</span>
                            <button
                                className="text-2xl"
                                onClick={() => handleIncrement(category)}
                                disabled={isBookingFull}
                            >
                                <FiPlus />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <h3 className="text-md font-semibold mb-2">Booking Class</h3>
                <div className="space-y-2 grid grid-cols-2 text-sm font-semibold text-gray-500">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="class"
                            value="Economy"
                            checked={bookingClassType === 'Economy'}
                            onChange={() => handleBookingClassChange('Economy')}
                            className="mr-2"
                        />
                        Economy
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="class"
                            value="Premium Economy"
                            checked={bookingClassType === 'Premium Economy'}
                            onChange={() => handleBookingClassChange('Premium Economy')}
                            className="mr-2"
                        />
                        Premium Economy
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="class"
                            value="Business"
                            checked={bookingClassType === 'Business'}
                            onChange={() => handleBookingClassChange('Business')}
                            className="mr-2"
                        />
                        Business
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="class"
                            value="First Class"
                            checked={bookingClassType === 'First Class'}
                            onChange={() => handleBookingClassChange('First Class')}
                            className="mr-2"
                        />
                        First Class
                    </label>
                </div>
            </div>

            <div className='text-end'>
                <button onClick={() => setIsOpen(false)} className="w-max px-4 py-2 mt-4 rounded border border-primary text-primary hover:bg-primary hover:text-white font-medium">
                    DONE
                </button>
            </div>
        </div>
    );
};

export default TravelerDropDown;
