/* eslint-disable react/prop-types */

const FilterStop = ({ filters, setFilters }) => {
    const handleStopsChange = (stops) => {
        setFilters({ ...filters, stops: filters.stops === null ? stops : null });
    };
    return (
        < div className="mb-6" >
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
        </div >
    );
};

export default FilterStop;