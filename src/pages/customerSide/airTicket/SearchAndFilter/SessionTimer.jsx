import { useEffect, useState } from "react";

const SessionTimer = () => {
    const [minutes, setMinutes] = useState(20);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [seconds, minutes]);
    return (
        <div className="flex flex-col gap-4 items-center bg-white p-6 ">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Session Timeout in</h2>
            <div className="flex text-primary text-2xl font-bold">
                <div className="flex flex-col">
                    <p className="w-16 h-11 rounded flex justify-center items-center text-white bg-primary">{String(minutes).padStart(2, '0')}</p>
                    <span className="text-base font-normal text-gray-500 text-center">min</span>
                </div>
                <span className="px-2">:</span>
                <div className="flex flex-col">
                    <p className="w-16 h-11 rounded flex justify-center items-center text-white bg-primary">{String(seconds).padStart(2, '0')}</p>
                    <span className="text-base font-normal text-gray-500 text-center">sec</span>
                </div>

            </div>
        </div>
    );
};

export default SessionTimer;