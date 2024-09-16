/* eslint-disable react/prop-types */

const FilterCheckingBaggage = ({ filters, setFilters }) => {
    const handleBaggageAllowanceChange = () => {
        setFilters({ ...filters, baggageAllowance: !filters.baggageAllowance });
    };
    return (
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
    );
};

export default FilterCheckingBaggage;