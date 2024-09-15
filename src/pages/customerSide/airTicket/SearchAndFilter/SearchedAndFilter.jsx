import Filter from "./Filter";
import PriceRange from "./PriceRange";
import SessionTimer from "./SessionTimer";

const SearchedAndFilter = () => {
    return (
        <div className="flex gap-5 lg:w-11/12 mx-auto">
            <div className="w-[500px] py-5 bg-white shadow-xl">
                <SessionTimer />
                <hr className='w-full border border-gray-400' />
                <PriceRange />
                <hr className='w-full border border-gray-400' />
                <Filter />
            </div>
            <div className="w-full"></div>
        </div>
    );
};

export default SearchedAndFilter;