import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ForgetPassword = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="card shadow-lg py-20 px-16 bg-white rounded-lg w-full max-w-[576px] min-h-[513px] mx-auto flex flex-col justify-center items-center gap-2">
        <h2 className="text-gray-800 font-bold text-3xl mb-10 text-center">Forget Password</h2>
        <div className="relative mb-5 max-w-[376px] space-y-2">
          <label htmlFor="email" className="font-bold">Email or Phone <span className="text-red-500"> *</span></label>
          <input
            className="w-full py-2 px-3 pl-10 rounded-md bg-primary/10 focus:outline-none focus:border-blue-500 h-[48px]"
            type="email"
            id="email"
            placeholder="Enter your email address"
          />
        </div>
        <Link to="/change-password" className="w-full max-w-[376px]">
          <button className="min-w-full py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 rounded-lg focus:outline-none h-[48px]">
            Forget Password
          </button>
        </Link>
        <div className="mt-4 text-center">
          <Link
            className="text-primary font-medium flex items-center justify-center gap-1"
            to="/login"
          >
            <FaArrowLeft className="text-primary" />
            <span>Back to Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
