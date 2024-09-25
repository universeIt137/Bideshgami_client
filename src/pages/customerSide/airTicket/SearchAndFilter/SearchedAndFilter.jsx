import { useState } from "react";
import PriceRange from "./PriceRange";
import SessionTimer from "./SessionTimer";
import FilterDepartureTime from "./FilterDepartureTime";
import FilterStop from "./FilterStop";
import FilterCheckingBaggage from "./FilterCheckingBaggage";
import FilterRefundable from "./FilterRefundable";
import FilterFromAt from "./FilterFromAt";
import FilterAirLines from "./FilterAirLines";
import FilterTransitTime from "./FilterTransitTime";
import AvailableFlight from "../AvailableFlight/AvailableFlight";

const SearchedAndFilter = () => {
    const [price, setPrice] = useState(5250); // Initial price
    const [minutes, setMinutes] = useState(20);
    const [seconds, setSeconds] = useState(0);
    const [filters, setFilters] = useState({
        departureTime: null,
        stops: null,
        baggageAllowance: false,
        refundable: false,
        airlines: [],
        fromAt: [],
        transitTime: false,
    });
    const minPrice = 4266;
    const maxPrice = 5250;

    const clearFilters = () => {
        setFilters({
            departureTime: null,
            stops: null,
            baggageAllowance: false,
            refundable: false,
            airlines: [],
            fromAt: [],
            transitTime: false,
        });
    };
    return (
        <div className="flex flex-col lg:flex-row gap-5 lg:w-11/12 mx-auto">
            <div className="w-[500px] py-5 bg-white shadow-xl space-y-3">
                <SessionTimer minutes={minutes} setMinutes={setMinutes} seconds={seconds} setSeconds={setSeconds} />

                <hr className='w-full  border-gray-400' />

                <PriceRange price={price} setPrice={setPrice} minPrice={minPrice} maxPrice={maxPrice} />

                <hr className='w-full border-gray-400' />
                <div className="px-4"><FilterDepartureTime filters={filters} setFilters={setFilters} /></div>
                <hr className='w-full border-gray-400' />
                <div className="px-4">
                    <FilterStop filters={filters} setFilters={setFilters} />
                    <hr className='w-full border-gray-400' />
                </div>
                <div className="px-4"><FilterCheckingBaggage filters={filters} setFilters={setFilters} /></div>
                <hr className='w-full border-gray-400' />
                <div className="px-4"><FilterRefundable filters={filters} setFilters={setFilters} /></div>
                <hr className='w-full border-gray-400' />
                <div className="px-4"><FilterFromAt filters={filters} setFilters={setFilters} /></div>
                <hr className='w-full border-gray-400' />
                <div className="px-4"><FilterAirLines filters={filters} setFilters={setFilters} /></div>
                <hr className='w-full border-gray-400' />
                <div className="px-4"><FilterTransitTime filters={filters} setFilters={setFilters} /></div>
                <hr className='w-full border-gray-400' />
                <div className="px-4">
                    <button
                        onClick={clearFilters}
                        className="bg-primary text-white py-2 px-4 rounded-lg w-full hover:bg-primary"
                    >
                        Clear Filters
                    </button>
                </div>
            </div>
            <div className="w-full">
                <AvailableFlight />
            </div>
        </div>
    );
};

export default SearchedAndFilter;