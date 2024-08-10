import React from "react";
import { Link } from "react-router-dom";

const Otp = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-md py-8">
        <div className="card shadow-lg py-16 px-12 bg-white rounded-lg">
          <h2 className="text-gray-800 font-bold text-3xl mb-6 text-center">Enter Your OTP Code</h2>
          <div className="flex justify-center gap-2 mb-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center border border-gray-300 rounded-md bg-blue-100 focus:outline-none focus:border-blue-500"
              />
            ))}
          </div>
          <Link to="/successfully_Pass_change">
            <button className="w-full py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 rounded-lg focus:outline-none">
              Submit
            </button>
          </Link>

          <div className="flex justify-between items-center mt-6 text-gray-600 text-sm">
            <span>
              Remaining time: <span className="text-blue-600">00:55</span> Seconds
            </span>
            <Link className="text-blue-600 font-semibold" to="/resend-code">
              Resend Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
