/* eslint-disable react/prop-types */
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { airports } from '../../../airportArray';

const AddOrRemoveTrip = ({
    tripAmount,
    id,
    setTripAmount,
    data
}) => {
    const handleDeleteTrip = () => {
        const newArray = tripAmount.filter((item) => item.id !== data.id);
        setTripAmount(newArray);
    };

    const handleAddTrip = () => {
        if (tripAmount?.length === 5) {
            return
        }
        setTripAmount([
            ...tripAmount,
            {
                id: new Date().getTime(),
                selectedAirport1: airports[0],
                selectedAirport2: airports[1],
                travelers: {
                    adults: 1,
                    children: 0,
                    kids: 0,
                    infants: 0,
                },
                departureDate: new Date(),
                bookingClass: 'Economy',
                returnDate: [
                    {
                        startDate: new Date(),
                        endDate: null,
                        key: 'selection',
                    },
                ],
            },
        ]);
    };

    const addCityBtn = <button
        onClick={handleAddTrip}
        className="btn btn-sm border border-primary text-primary hover:bg-primary hover:text-white "
    >
        <FaPlusCircle /> Add another city
    </button>
    return (
        (tripAmount.length - 1) !== id ? (
            <div
                onClick={handleDeleteTrip}
                className="w-full relative border-2 rounded-lg p-2 flex justify-center items-center cursor-pointer min-h-[100px]"
            >
                <button className="flex items-center gap-1 text-lg font-bold text-red-500">
                    <FaMinusCircle /> Remove
                </button>
            </div>
        ) : (
            tripAmount.length === (id + 1) ? (
                tripAmount.length === 4 ? (
                    <div
                        onClick={handleDeleteTrip}
                        className="w-full relative border-2 rounded-lg p-2 flex justify-center items-center cursor-pointer min-h-[100px]"
                    >
                        <button className="flex items-center gap-1 text-lg font-bold text-red-500">
                            <FaMinusCircle /> Remove
                        </button>
                    </div>
                ) : (
                    <div className="w-full relative border-2 rounded-lg p-2 flex justify-center items-center gap-2 min-h-[100px]">
                        {addCityBtn}
                        {id !== 0 && (
                            <button
                                onClick={handleDeleteTrip}
                                className="text-red-500 flex items-center gap-1 text-sm font-bold btn btn-sm bg-transparent border-none hover:bg-red-100"
                            >
                                <FaMinusCircle /> Remove
                            </button>
                        )}
                    </div>
                )
            ) : (
                <div className="w-full relative border-2 rounded-lg p-2 flex justify-center items-center">
                    {addCityBtn}
                </div>
            )
        )
    );
};

export default AddOrRemoveTrip;