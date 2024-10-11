import React from "react";
import { Link } from "react-router-dom";

const Otp = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="card shadow-lg py-20 px-16 bg-white rounded-lg w-full max-w-[576px] min-h-[513px] mx-auto flex flex-col justify-center items-center gap-2">
        <h2 className="text-gray-800 font-bold text-3xl mb-6 text-center">Enter Your OTP Code</h2>
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-[22px] h-[25px] text-center border border-gray-300 rounded bg-primary/70 focus:outline-none focus:border-blue-500"
            />
          ))}
        </div>
        <Link to="/successfully_Pass_change" className="w-full max-w-[376px]">
          <button className="w-full py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 rounded-lg focus:outline-none">
            Submit
          </button>
        </Link>

        <div className="flex justify-between items-center mt-4 text-black text-sm w-full max-w-[336px]">
          <p>
            Remaining time: <span className="text-blue-600">00:55</span> Seconds
          </p>
          <Link className="text-blue-600 font-semibold" to="/resend-code">
            Resend Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Otp;
