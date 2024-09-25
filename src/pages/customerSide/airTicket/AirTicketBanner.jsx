import React, { useEffect, useState } from 'react';
import './airTicket.css';
import Destination from './Destination';
import { airports } from '../../../airportArray';
import Destination1 from './Destination1';
import GlobalBanner from '../../../shared/GlobalBanner';

const AirTicketBanner = () => {
    const [tripType, setTripType] = useState('oneWay'); // State for radio selection
    const [selectedFare, setSelectedFare] = useState('Regular Fares'); // Initial fare type


    const [trip1, setTrip1] = useState([
        {
            id: new Date().getTime(),
            selectedAirport1: airports[0],
            selectedAirport2: airports[1],
            departureDate: new Date(),
            bookingClass: 'Economy',
            returnDate: [
                {
                    startDate: new Date(),
                    endDate: null,
                    key: 'selection'
                }
            ]
        }
    ])
    const [tripAmount, setTripAmount] = useState([])
    const [travelers, setTravelers] = useState({
        adults: 1,
        children: 0,
        kids: 0,
        infants: 0
    })
    const [bookingClassType, setBookingClassType] = useState('Economy')
    useEffect(() => {
        if (selectedFare === 'Student Fares' || selectedFare === 'Seaman Fares') {
            setTravelers({
                adults: travelers.adults
            })
        } else {
            setTravelers({
                adults: travelers?.adults || 1,
                children: travelers?.children || 0,
                kids: travelers?.kids || 0,
                infants: travelers?.infants || 0
            })
        };

        if (selectedFare === 'Umrah Fares') {
            if (tripType === 'oneWay') {
                setTripType('roundTrip')
            }

        }
        if (selectedFare === 'Student Fares') {
            if (tripType === 'multiCity') {
                setTripType('oneWay')
                setTripAmount([])
            }
        }
    }, [selectedFare])
    const handleChange = (event) => {
        const value = event.target.value
        setTripType(value);
        if (value !== 'multiCity') {
            setTripAmount([])
        } else {
            if (tripAmount?.length > 1) {
                return
            } else {
                setTripAmount([...tripAmount, {
                    id: new Date().getTime(),
                    selectedAirport1: airports[0],
                    selectedAirport2: airports[1],
                    departureDate: new Date(),
                    returnDate: [
                        {
                            startDate: new Date(),
                            endDate: null,
                            key: 'selection'
                        }
                    ]
                }])
            }
        }
    };
    // Handler to set selected fare
    const handleFareChange = (fareType) => {
        setSelectedFare(fareType);
    };
    // window.scrollTo(0, 0);
    const fareType = ['Regular Fares', 'Student Fares', 'Umrah Fares', 'Seaman Fares']
    return (
        <div className='relative'>
            <GlobalBanner />
            <div className='mt-[-112px] bg-white z-20'>


                <div className='p-5 lg:w-11/12 mx-auto rounded-lg bg-white mainBoxShadow relative'>

                    <div className="flex gap-5 lg:ml-10 items-center">
                        {
                            selectedFare !== 'Umrah Fares' && <div className="flex justify-center gap-2">
                                <input
                                    type="radio"
                                    name="tripType"
                                    value="oneWay"
                                    className="radio radio-primary"
                                    checked={tripType === 'oneWay'}
                                    onChange={handleChange}
                                />
                                <span className='font-bold'>One Way</span>
                            </div>
                        }

                        <div className="flex justify-center gap-2">
                            <input
                                type="radio"
                                name="tripType"
                                value="roundTrip"
                                className="radio radio-primary"
                                checked={tripType === 'roundTrip'}
                                onChange={handleChange}
                            />
                            <span className='font-bold'>Round Trip</span>
                        </div>

                        {
                            selectedFare !== 'Student Fares' && <div className="flex justify-center gap-2">
                                <input
                                    type="radio"
                                    name="tripType"
                                    value="multiCity"
                                    className="radio radio-primary"
                                    checked={tripType === 'multiCity'}
                                    onChange={handleChange}
                                />
                                <span className='font-bold'>Multi City</span>
                            </div>
                        }
                    </div>

                    {/* Select destination section  */}
                    <Destination1 travelers={travelers} setTravelers={setTravelers} tripType={tripType} setTripType={setTripType} trip1={trip1} setTrip1={setTrip1} bookingClassType={bookingClassType} setBookingClassType={setBookingClassType} />
                    {
                        tripAmount?.map((item, idx) => <Destination travelers={travelers} key={idx} data={item} tripType={tripType} setTripType={setTripType} tripAmount={tripAmount} setTripAmount={setTripAmount} id={idx} />)
                    }


                    {/* {
                        tripType === 'multiCity' && <Destination />
                    } */}






                    <div className="py-3 lg:flex items-center gap-4">
                        <div className="mt-5">
                            <p className="font-bold">Fare Type:</p>
                        </div>

                        <div className="lg:flex gap-3 mt-5">
                            <div className="flex gap-2 flex-wrap">
                                {
                                    fareType.map((item, idx) => <button key={idx}
                                        className={`bg-blue-100  text-gray-700 py-2 px-4 rounded-md flex gap-2 items-center`}
                                        onClick={() => handleFareChange(item)}
                                    >
                                        <input
                                            type="radio"
                                            name="radio-2"
                                            className="radio1"
                                            checked={selectedFare === item}
                                            onChange={() => handleFareChange(item)}
                                        />
                                        {item}
                                    </button>)
                                }
                            </div>
                        </div>
                    </div>


                </div>
                <div className=" flex -mt-5 justify-center items-center relative">
                    <button className='btn bg-primary text-base text-white px-8 text-center font-normal rounded-md hover:bg-primary'>Search</button>
                </div>

            </div>
        </div>
    );
};

export default AirTicketBanner;