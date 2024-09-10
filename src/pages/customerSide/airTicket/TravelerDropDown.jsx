/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FiMinus, FiPlus } from 'react-icons/fi';

const TravelerDropDown = ({ travelers, setTravelers, setIsOpen }) => {
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

    const handleIncrement = (category) => {
        setTravelers(prevState => ({
            ...prevState,
            [category]: prevState[category] + 1
        }));
    };

    const handleDecrement = (category) => {
        if (travelers[category] > 0) {
            setTravelers(prevState => ({
                ...prevState,
                [category]: prevState[category] - 1
            }));
        }
    };
    const isBookingFull = Object.values(travelers).reduce((a, b) => a + b, 0) >= 9;
    
    
    return (
        <div ref={dropdownRef} className="bg-white p-3 rounded-lg shadow-lg w-full min-w-max">
            <h2 className="text-sm font-bold">Travelers</h2>
            {
                isBookingFull && <p className="text-sm text-red-500 mb-4 font-medium">Maximum 9 passengers are allowed per booking</p>
            }

            <div className="space-y-4">
                {[{ category: 'adults', slogan: '12 years and above' }, { category: 'children', slogan: '5 years - under 12 years' }, { category: 'kids', slogan: '2 years - under 5 years' }, { category: 'infants', slogan: 'below 2 years' }].map((category, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <div>
                            <p className="capitalize text-gray-500">{category?.category}</p>
                            <p className='text-xs text-black'>{category?.slogan}</p>
                        </div>
                        <div className="flex items-center space-x-2 gap-3">
                            <button
                                className="text-2xl"
                                onClick={() => handleDecrement(category?.category)}
                                disabled={travelers[category?.category] === 0}
                            >
                                <FiMinus />
                            </button>
                            <span className="text-lg font-medium">{travelers[category?.category]}</span>
                            <button
                                className="text-2xl"
                                onClick={() => handleIncrement(category?.category)}
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
                        <input type="radio" name="class" value="economy" defaultChecked className="mr-2" /> Economy
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="class" value="premium-economy" className="mr-2" /> Premium Economy
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="class" value="business" className="mr-2" /> Business
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="class" value="first-class" className="mr-2" /> First Class
                    </label>
                </div>
            </div>

            <div className='text-end'><button onClick={()=> setIsOpen(false)} className="w-max px-4    py-2 mt-4 rounded border border-primary text-primary hover:bg-primary hover:text-white font-medium">DONE</button></div>
        </div>
    );
};

export default TravelerDropDown;
