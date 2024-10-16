import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Import the arrow icon
const SuccessfullyPass = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-10">
      <div className="card shadow-lg py-20 px-16 bg-white rounded-lg w-full max-w-[576px] min-h-[513px] mx-auto flex flex-col justify-center items-center gap-2">
        <h2 className="text-gray-800 font-bold text-3xl mb-6">Password Change</h2>
        <img
          src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723110046/Group_144_ein3yg.png"
          alt="Success Icon"
          className="mx-auto mb-4"
        />
        <p className="text-black mb-6 text-sm max-w-[300px] text-center">
          Your password has been successfully reset. You can now log in with your new password.
        </p>
        <div className="text-gray-800 font-medium text-center mb-4">
          <p>Login</p>
          <p>Thank you</p>
          <p>Bideshgami Support Team</p>
        </div>
        <Link
          className="text-blue-600 font-semibold flex items-center justify-center gap-2"
          to="/login"
        >
          <FaArrowLeft className="text-blue-600" />
          <span>Back to Log In</span>
        </Link>
      </div>
    </div>
  );
};

export default SuccessfullyPass;
