import React from "react";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-md py-8">
        <div className="card shadow-lg py-20 px-16 bg-white rounded-lg">
          <h2 className="text-gray-800 font-bold text-3xl mb-6 text-center">Change <span className="text-blue-600"> Password</span></h2>
          <div className="relative mb-4">
            <label htmlFor="new-password">
              New Password<span className="text-red-700">*</span>
            </label>
            <input
              className="w-full py-2 px-3 rounded-md bg-blue-100 focus:outline-none focus:border-blue-500"
              type="password"
              id="new-password"
              placeholder="Enter your new password"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="confirm-password">
              Confirm Password<span className="text-red-700">*</span>
            </label>
            <input
              className="w-full py-2 px-3 rounded-md bg-blue-100 focus:outline-none focus:border-blue-500"
              type="password"
              id="confirm-password"
              placeholder="Confirm your new password"
            />
          </div>
          <Link to="/OTP-code">
            <button className="w-full py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 rounded-lg focus:outline-none">
              Update Password
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
