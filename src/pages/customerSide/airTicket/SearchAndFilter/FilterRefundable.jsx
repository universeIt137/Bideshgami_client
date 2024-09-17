/* eslint-disable react/prop-types */

const FilterRefundable = ({ filters, setFilters }) => {
    const handleRefundableChange = () => {
        setFilters({ ...filters, refundable: !filters.refundable });
    };
    return (
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
    );
};

export default FilterRefundable;