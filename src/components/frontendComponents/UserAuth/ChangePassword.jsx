import React from "react";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="card shadow-lg py-20 px-16 bg-white rounded-lg w-full max-w-[576px] min-h-[513px] mx-auto flex flex-col justify-center items-center gap-2">
        <h2 className="text-gray-800 font-bold text-3xl mb-6 text-center">Change <span className="text-blue-600"> Password</span></h2>
        <div className="relative mb-4 w-full space-y-2">
          <label htmlFor="new-password" className="font-bold">
            New Password<span className="text-red-700">*</span>
          </label>
          <input
            className="w-full py-2 px-3 pl-10 rounded-md bg-primary/10 focus:outline-none focus:border-blue-500 h-[48px]"
            type="password"
            id="new-password"
            placeholder="Enter your new password"
          />
        </div>
        <div className="relative mb-4 w-full space-y-2">
          <label htmlFor="confirm-password" className="font-bold">
            Confirm Password<span className="text-red-700">*</span>
          </label>
          <input
            className="w-full py-2 px-3 pl-10 rounded-md bg-primary/10 focus:outline-none focus:border-blue-500 h-[48px]"
            type="password"
            id="confirm-password"
            placeholder="Confirm your new password"
          />
        </div>
        <Link to="/OTP-code" className="w-full flex justify-center items-center">
          <button className="w-full max-w-[183px]  bg-primary text-white hover:bg-blue-700 rounded-xl  focus:outline-none h-[35px]">
            Update Password
          </button>
        </Link>

      </div>
    </div>
  );
};

export default ChangePassword;
