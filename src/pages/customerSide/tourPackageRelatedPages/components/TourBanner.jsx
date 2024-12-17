import React, { useEffect, useState } from 'react';
import Destination1 from '../../airTicket/Destination1';
import { airports } from '../../../../airportArray';
import GlobalBanner from '../../../../shared/GlobalBanner';
import Destination from '../../airTicket/Destination';
import DestinationComponent from './DestinationComponent';
import { Link } from 'react-router-dom';

const TourBanner = () => {
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
    const fareType = ['International', 'Domestic', 'Ladies tour package']
    return (
        <div className='relative'>
            <GlobalBanner />
            <div className='mt-[-112px] bg-white z-20'>


                <div className='p-5 lg:w-11/12 mx-auto rounded-lg bg-white mainBoxShadow relative'>



                    {/* Select destination section  */}
                    <DestinationComponent travelers={travelers} setTravelers={setTravelers} tripType={tripType} setTripType={setTripType} trip1={trip1} setTrip1={setTrip1} bookingClassType={bookingClassType} setBookingClassType={setBookingClassType} />
                    {
                        tripAmount?.map((item, idx) => <Destination travelers={travelers} key={idx} data={item} tripType={tripType} setTripType={setTripType} tripAmount={tripAmount} setTripAmount={setTripAmount} id={idx} />)
                    }


                    {/* {
                        tripType === 'multiCity' && <Destination />
                    } */}






                    <div className="py-3 lg:flex items-center gap-4  justify-between ">


                        <div className="lg:flex gap-3 mt-5 items-center">
                            <p className="font-bold">Tour Type:</p>
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

                        <div className="lg:flex gap-3 mt-5 ">
                            <div className="flex gap-2 justify-end">
                                <button className='  text-base text-white px-8 text-center font-normal rounded-md '>
                                    <div className="flex items-center gap-3">
                                        <div className="">
                                            <img src="https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734430713/Bideshgami/Public/ds0ix4d39syxssjbov4d.png" alt="" />
                                        </div>
                                        <p className='text-primary font-bold'>Add Another City</p>
                                    </div>
                                </button>
                                <button className='btn bg-primary text-base text-white px-8 text-center font-normal rounded-md hover:bg-primary'>
                                    <Link to={'/customized-tour'}>
                                        Customize Tour
                                    </Link>
                                </button>
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

export default TourBanner;