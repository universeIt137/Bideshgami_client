import React, { useState } from "react";

const FlightPenaltyDetails = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChatClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="w-full max-w-4xl mx-auto bg-white shadow-md border border-gray-300 p-5 rounded-md">
            {/* Header Section */}
            <div className="flex items-center mb-5">
                <img
                    src="https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734504177/Bideshgami/Public/irqatgm6wap1jxzhlud5.png" // Replace with your logo URL
                    alt="Logo"
                    className="mr-2"
                />
                <h2 className="text-xl font-semibold">Dhaka to Chittagong</h2>
            </div>

            {/* Cancellation Section */}
            <div className="border border-gray-300 rounded-md mb-4">
                <div className="grid grid-cols-2">
                    <span className="font-semibold border border-gray-300 p-4">Cancellation <br />
                        <span className="font-light text-[">(Per Passenger)</span>
                    </span>
                    <span className="text-right font-semibold border border-gray-300 p-4">Amount/Value <br />
                        <span className="font-light text-[">(Per Passenger)</span>
                    </span>
                </div>

                <div className="grid grid-cols-2">
                    <span className="font-semibold border border-gray-300 p-4">
                        <p className="mt-2 font-medium">Maximum Penalty amount</p>
                    </span>
                    <span className="text-right  border border-gray-300 p-4">
                        <p className="mt-1">Adult: BDT 2,000</p>
                    </span>
                </div>


                <div className="p-3 bg-blue-50 text-sm border-t border-gray-300 mt-5">
                    <strong>*Note For Voluntary Cancellation:</strong> Service Fees & gateway
                    charges will be additionally applied on top of Penalty amount. Some taxes
                    may not be refundable.
                </div>
            </div>

            <div className="border border-gray-300 rounded-md mb-4">
                <div className="grid grid-cols-2">
                    <span className="font-semibold border border-gray-300 p-4">Date Change <br />
                        <span className="font-light text-[">(From Scheduled Flight departure)</span>
                    </span>
                    <span className="text-right font-semibold border border-gray-300 p-4">Amount/Value <br />
                        <span className="font-light text-[">(Per Passenger)</span>
                    </span>
                </div>

                <div className="grid grid-cols-2">
                    <span className="font-semibold border border-gray-300 p-4">
                        <p className="mt-2 font-medium">Maximum Penalty amount</p>
                    </span>
                    <span className="text-right  border border-gray-300 p-4">
                        <p className="mt-1">Adult: BDT 2,000</p>
                    </span>
                </div>


                <div className="p-3 bg-blue-50 text-sm border-t border-gray-300 mt-5">
                    <strong>*Note For Date Change: </strong>
                    Service Fees.Fare Difference and Tax Difference Will be additionally applied on to top
                </div>
            </div>



            {/* Button */}
            <div className="text-center">
                <button onClick={handleChatClick} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Show Details
                </button>
            </div>

            {/* Important Notice */}
            <div className="mt-5 p-4 bg-gray-50 border border-gray-300 rounded-md text-sm text-gray-700">
                <strong>*Important:</strong> The airline fees are continuously changing. Flight
                Expert doesn’t certify the fees/price shown above. The mentioned fees are for
                prediction of easiness of our customer. You can change the date only by
                choosing the same airline on a different date.
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white rounded-lg shadow-lg w-[800px]">
                            {/* Header */}
                            <div className="flex justify-between items-center p-4 border-b bg-gray-200 rounded-lg">
                                <div>
                                    
                                    <p className="text-primary font-bold text-2xl">Fare Rules</p>
                                </div>
                                <button
                                    className="text-primary hover:text-primary font-bold"
                                    onClick={() => handleCloseModal()}
                                >
                                    &#x2715;
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-4 text-black">
                                <p className="underline text-2xl font-bold">Adult</p>
                                <div className="space-y-2">
                                    <p className="font-bold">Reissue: </p>

                                    <p className="">Maximum Penalty Amount:
                                        <span className="font-bold"> BDT 1500</span>
                                    </p>

                                    <p className="">Reissue before departure (RiBD):
                                        <span className="font-bold"> Allowed with restrictions</span>
                                    </p>

                                    <p className="">Reissue before departure (RiBD):
                                        <span className="font-bold"> Allowed with restrictions</span>
                                    </p>

                                    <p className="">Reissue after departure (RIAD): 
                                        <span className="font-bold"> Not Allowed</span>
                                    </p>

                                    <p className="">Reissue after departure when no show: 
                                        <span className="font-bold"> Not Allowed</span>
                                    </p>

                                </div>

                                <div className="mt-5 space-y-2">
                                    <p className="font-bold text-xl">Refund:</p>

                                    <p className="">Maximum Penalty Amount: 
                                        <span className="font-bold"> BDT 1500</span>
                                    </p>

                                    <p className="">Refund before departure: 
                                        <span className="font-bold"> Allowed with restrictions</span>
                                    </p>

                                    <p className="">Refund after departure: 
                                        <span className="font-bold"> Not allowed</span>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlightPenaltyDetails;
