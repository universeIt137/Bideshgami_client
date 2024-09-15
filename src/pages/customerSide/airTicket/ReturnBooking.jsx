/* eslint-disable react/prop-types */
import { FaChevronDown } from 'react-icons/fa';
import Return from './Return'; // Import the Return component
import VisibleDay from './VisibleDay'; // Import the VisibleDay component

const ReturnBooking = ({
    openReturn,
    data,
    handleReturnDate,
    setOpenReturn,
    tripAmount,
    setTripAmount,
    tripType,
    setTripType
}) => {

    // Handle opening return date
    const handleOpenReturnDate = () => {
        const updatedTrip = tripAmount.map((item) =>
            item.id === data.id
                ? {
                    ...item,
                    returnDate: item.returnDate[0]?.endDate === null
                        ? [
                            {
                                startDate: item.departureDate,
                                endDate: item.departureDate,
                                key: 'selection',
                            },
                        ]
                        : item.returnDate,
                }
                : item
        );
        setTripAmount(updatedTrip);
        setOpenReturn(true);

        if (tripType === 'oneWay') {
            setTripType('roundTrip');
        }
    };
    return (
        <>
            <div
                onClick={handleOpenReturnDate}
                className={`border p-3 rounded-r-lg text-gray-500 w-1/2 ${openReturn ? "bg-gray-200" : "bg-white"}`}
            >
                <p className="flex items-center gap-2">
                    Return <FaChevronDown />
                </p>
                {data.returnDate[0]?.endDate === null ? (
                    <>
                        <p className="text-[12px]">Tap to book return ticket</p>
                    </>
                ) : (
                    <VisibleDay comingDay={data.returnDate[0]?.endDate} />
                )}
            </div>

            {openReturn && (
                <div className="bg-white z-30 absolute right-0 top-[100px] w-max">
                    <Return
                        returnDate={data.returnDate}
                        handleReturnDate={handleReturnDate}
                        setIsOpen={setOpenReturn}
                    />
                </div>
            )}
        </>
    );
};

export default ReturnBooking;
