import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ForgetPassword = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-md py-8">
        <div className="card shadow-lg py-20 px-16 bg-white rounded-lg">
          <h2 className="text-gray-800 font-bold text-3xl mb-6 text-center">Forget Password</h2>
          <div className="relative mb-4">
            <label htmlFor="email">Email or Phone number<span className="text-red-700">*</span></label>
            <input
              className="w-full py-2 px-3 pl-10 rounded-md bg-blue-100 focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <Link to="/change-password">
            <button className="w-full py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 rounded-lg focus:outline-none">
              Forget Password
            </button>
          </Link>
          <div className="mt-4 text-center">
            <Link
              className="text-blue-600 font-semibold flex items-center justify-center gap-1"
              to="/login"
            >
              <FaArrowLeft className="text-blue-600" />
              <span>Back to Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
