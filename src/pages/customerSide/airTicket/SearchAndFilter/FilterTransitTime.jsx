import React from 'react';

const FilterTransitTime = (filters, setFilters) => {
    const handleTransitTimeChange = () => {
        setFilters({ ...filters, transitTime: !filters.transitTime });
    };
    return (
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
    );
};

export default FilterTransitTime;