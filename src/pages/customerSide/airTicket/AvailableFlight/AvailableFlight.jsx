import { useState } from "react";
import FlightSorting from "./FlightSorting";
import FlightCard from "./FlightCard";
import { flights } from "../../../../AllFlights";

const AvailableFlight = () => {
    const [selectedOption, setSelectedOption] = useState("cheapest");
    return (
        <div className="w-full space-y-5">
            <FlightSorting selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
           <div className="space-y-5">
                {
                    flights.map((item, idx) => <FlightCard key={idx} data={item} />)
                }
           </div>
        </div>
    );
};

export default AvailableFlight;