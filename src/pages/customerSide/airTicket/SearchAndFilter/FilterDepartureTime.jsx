/* eslint-disable react/prop-types */
import { FiSun } from "react-icons/fi";
import { PiSunHorizonFill } from "react-icons/pi";


const FilterDepartureTime = ({ filters, setFilters }) => {
    const handleDepartureTimeChange = (time) => {
        setFilters({ ...filters, departureTime: time === filters.departureTime ? null : time });
    };
    return (
        < div className="mb-6" >
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
        </div >
    );
};

export default FilterDepartureTime;