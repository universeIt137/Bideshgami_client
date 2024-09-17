/* eslint-disable react/prop-types */
import React from 'react';

const FilterFromAt = ({ filters, setFilters }) => {
    const handleFromAtChange = (fromAt) => {
        const newFromAt = filters.fromAt.includes(fromAt)
            ? filters.fromAt.filter((a) => a !== fromAt)
            : [...filters.fromAt, fromAt];
        setFilters({ ...filters, fromAt: newFromAt });
    };
    return (
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
    );
};

export default FilterFromAt;