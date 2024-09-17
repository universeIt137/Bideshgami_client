/* eslint-disable react/prop-types */
import React from 'react';

const FilterAirLines = ({ filters, setFilters }) => {
    const handleAirlinesChange = (airline) => {
        const newAirlines = filters.airlines.includes(airline)
            ? filters.airlines.filter((a) => a !== airline)
            : [...filters.airlines, airline];
        setFilters({ ...filters, airlines: newAirlines });
    };
    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Airlines</h3>
            <div className='text-gray-500 text-sm flex justify-between'>
                <label className="flex items-center space-x-2 ">
                    <input
                        type="checkbox"
                        checked={filters.airlines.includes('Biman Bangladesh Airlines')}
                        onChange={() => handleAirlinesChange('Biman Bangladesh Airlines')}
                        className="form-checkbox h-5 w-5 text-red-500"
                    />
                    <span>Biman Bangladesh Airlines</span>
                </label>
                <p className='w-max'> BDT 4,266</p>
            </div>
            <div className='text-gray-500 text-sm flex justify-between'>
                <label className="flex items-center space-x-2 mt-2 text-gray-500 text-sm">
                    <input
                        type="checkbox"
                        checked={filters.airlines.includes('US Bangla Airlines')}
                        onChange={() => handleAirlinesChange('US Bangla Airlines')}
                        className="form-checkbox h-5 w-5 text-red-500"
                    />
                    <span>US Bangla Airlines</span>
                </label>
                <p className='w-max'> BDT 4,266</p>
            </div>
            <div className='text-gray-500 text-sm flex justify-between'>
                <label className="flex items-center space-x-2 mt-2 text-gray-500 text-sm">
                    <input
                        type="checkbox"
                        checked={filters.airlines.includes('Air Astra')}
                        onChange={() => handleAirlinesChange('Air Astra')}
                        className="form-checkbox h-5 w-5 text-red-500"
                    />
                    <span>Air Astra</span>
                </label>
                <p className='w-max'> BDT 4,266</p>
            </div>
        </div>
    );
};

export default FilterAirLines;