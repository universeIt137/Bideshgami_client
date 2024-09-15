import React, { useState } from 'react';
import { FiSun } from 'react-icons/fi';
import { PiSunHorizonFill } from 'react-icons/pi';

const Filter = () => {
    const [filters, setFilters] = useState({
        departureTime: null,
        stops: null,
        baggageAllowance: false,
        refundable: false,
        airlines: [],
        fromAt: [],
        transitTime: false,
    });

    const handleDepartureTimeChange = (time) => {
        setFilters({ ...filters, departureTime: time === filters.departureTime ? null : time });
    };

    const handleStopsChange = (stops) => {
        setFilters({ ...filters, stops: filters.stops === null ? stops : null });
    };

    const handleBaggageAllowanceChange = () => {
        setFilters({ ...filters, baggageAllowance: !filters.baggageAllowance });
    };

    const handleRefundableChange = () => {
        setFilters({ ...filters, refundable: !filters.refundable });
    };

    const handleAirlinesChange = (airline) => {
        const newAirlines = filters.airlines.includes(airline)
            ? filters.airlines.filter((a) => a !== airline)
            : [...filters.airlines, airline];
        setFilters({ ...filters, airlines: newAirlines });
    };
    const handleFromAtChange = (fromAt) => {
        const newFromAt = filters.fromAt.includes(fromAt)
            ? filters.fromAt.filter((a) => a !== fromAt)
            : [...filters.fromAt, fromAt];
        setFilters({ ...filters, fromAt: newFromAt });
    };

    const handleTransitTimeChange = () => {
        setFilters({ ...filters, transitTime: !filters.transitTime });
    };

    const clearFilters = () => {
        setFilters({
            departureTime: null,
            stops: null,
            baggageAllowance: false,
            refundable: false,
            airlines: [],
            transitTime: false,
        });
    };
    return (
        <div className="p-4 bg-white shadow-lg rounded-lg max-w-xs">
            {/* Departure Time */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Departure time in Dhaka</h3>
                <div className="flex space-x-5">
                    <button
                        className={`w-full px-4 py-2 border rounded-lg flex flex-col justify-center items-center ${filters.departureTime === 'Afternoon' ? 'bg-primary text-white' : ''
                            }`}
                        onClick={() => handleDepartureTimeChange('Afternoon')}
                    >
                        <FiSun className='text-xl mb-2' />
                        <span className='text-xs w-max'>After Noon</span>
                        <span className='text-xs w-max'> 12:00 - 17:59</span>
                    </button>
                    <button
                        className={`w-full px-4 py-2 border rounded-lg flex flex-col justify-center items-center ${filters.departureTime === 'Evening' ? 'bg-primary text-white' : ''
                            }`}
                        onClick={() => handleDepartureTimeChange('Evening')}
                    >
                        <PiSunHorizonFill className='text-xl mb-2' />
                        <span className='text-xs w-max'>Evening </span>
                        <span className='text-xs w-max'> 18:00 - 23:59</span>
                    </button>
                </div>
            </div>

            {/* Stops */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Stops From Dhaka</h3>
                <div className='flex justify-between text-gray-500 text-sm'>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={filters.stops === 'Non Stop'}
                            onChange={() => handleStopsChange('Non Stop')}
                            className="form-checkbox h-5 w-5 text-red-500"
                        />
                        <span>Non Stop</span>
                    </label>
                    <p>BDT 4,266</p>
                </div>
            </div>

            {/* Baggage Allowance */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Check in Baggage Allowance</h3>
                <label className="flex items-center space-x-2 text-gray-500 text-sm">
                    <input
                        type="checkbox"
                        checked={filters.baggageAllowance}
                        onChange={handleBaggageAllowanceChange}
                        className="form-checkbox h-5 w-5 text-red-500"
                    />
                    <span>20 KG</span>
                </label>
            </div>

            {/* Refundable */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Refundable</h3>
                <label className="flex items-center space-x-2 text-gray-500 text-sm">
                    <input
                        type="checkbox"
                        checked={filters.refundable}
                        onChange={handleRefundableChange}
                        className="form-checkbox h-5 w-5 text-red-500"
                    />
                    <span>Partially Refundable</span>
                </label>
            </div>
            
            {/* fromAt */}
            <div className="mb-6 flex gap-2">
                <div>
                    <h3 className="text-lg font-semibold mb-1">Departing from</h3>
                    <div className='text-gray-500 text-sm flex justify-between'>
                        <label className="flex items-center space-x-2 ">
                            <input
                                type="checkbox"
                                checked={filters.fromAt.includes('DAC')}
                                onChange={() => handleFromAtChange('DAC')}
                                className="form-checkbox h-5 w-5 text-red-500"
                            />
                            <span>DAC</span>
                        </label>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-1">Arriving at</h3>
                    <div className='text-gray-500 text-sm flex justify-between'>
                        <label className="flex items-center space-x-2 mt-2 text-gray-500 text-sm">
                            <input
                                type="checkbox"
                                checked={filters.fromAt.includes('CGP')}
                                onChange={() => handleFromAtChange('CGP')}
                                className="form-checkbox h-5 w-5 text-red-500"
                            />
                            <span>CGP</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Airlines */}
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


            {/* Transit Time */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Transit Time (Dhaka - Chittagong)</h3>
                <label className="flex items-center space-x-2 text-gray-500 text-sm">
                    <input
                        type="checkbox"
                        checked={filters.transitTime}
                        onChange={handleTransitTimeChange}
                        className="form-checkbox h-5 w-5 text-red-500"
                    />
                    <span>No Transit Time</span>
                </label>
            </div>

            {/* Clear Filters */}
            <button
                onClick={clearFilters}
                className="bg-red-500 text-white py-2 px-4 rounded-lg w-full hover:bg-red-600"
            >
                Clear Filters
            </button>
        </div>
    );
};

export default Filter;