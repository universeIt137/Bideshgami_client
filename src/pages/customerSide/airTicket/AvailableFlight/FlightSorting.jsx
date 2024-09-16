import { MdPlayArrow } from "react-icons/md";

const FlightSorting = ({ selectedOption, setSelectedOption }) => {
    return (
        <div className="w-full mt-10 bg-white py-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center">
                <button className="text-5xl text-primary rotate-180"><MdPlayArrow /></button>
                <h1 className="text-2xl font-bold text-center mb-4">
                    Flights from Dhaka to Chittagong
                </h1>
                <button className="text-5xl text-primary"><MdPlayArrow /></button>
            </div>
            <div className="flex justify-between items-center">


                {/* Toggleable Section */}
                <div className="flex justify-center w-full items-center gap-2">
                    {/* Cheapest */}
                    <div
                        onClick={() => setSelectedOption("cheapest")}
                        className={`p-4 cursor-pointer  ${selectedOption === "cheapest"
                            ? "bg-primary/5"
                            : ""
                            }`}
                    >
                        <h2
                            className={`text-base font-semibold ${selectedOption === "cheapest" ? "text-black" : "text-gray-500"
                                }`}
                        >
                            Cheapest
                        </h2>
                        <p className="text-sm text-gray-500">To get the cheapest available flights</p>
                    </div>
                    <div className="border-l border h-[50px]"></div>
                    {/* Shortest */}
                    <div
                        onClick={() => setSelectedOption("shortest")}
                        className={`p-4 cursor-pointer ${selectedOption === "shortest"
                            ? "bg-primary/5"
                            : ""
                            }`}
                    >
                        <h2
                            className={`text-base font-semibold ${selectedOption === "shortest" ? "text-black" : "text-gray-500"
                                }`}
                        >
                            Shortest
                        </h2>
                        <p className="text-sm text-gray-500">To get the shortest available flights</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FlightSorting;