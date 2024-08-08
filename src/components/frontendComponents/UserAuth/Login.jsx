import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="py-8 bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="card shadow-md rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block">
              <img
                className="w-full rounded-lg"
                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723106697/Rectangle_145_s9ipdg.png"
                alt="loginimg"
              />
            </div>
            <div className="text-center md:text-left px-6">
              <h2 className="text-blue-600 font-bold text-3xl mb-6">Log In</h2>
              <input
                className="w-full py-2 px-3 border-b-2 border-gray-500 focus:outline-none focus:border-blue-600 mb-4"
                type="email"
                placeholder="Email or phone number"
              />
              <div className="relative mb-4">
                <input
                  className="w-full py-2 px-3 border-b-2 border-gray-500 focus:outline-none focus:border-blue-600"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </button>
              </div>
              <Link
                className="block text-blue-600 font-semibold text-sm mb-4 text-right"
                to="/forgot-password"
              >
                Forget Password
              </Link>
              <button className="block mx-auto py-2 px-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 rounded-lg focus:outline-none">
                Login
              </button>
              <div className="mt-4 text-center">
                <span className="text-gray-600">
                  Not a member?{" "}
                </span>
                <Link className="text-blue-600 font-semibold" to="/sign-up">
                  Create New Account
                </Link>
              </div>
              <div className="mt-6 flex justify-center gap-4">
                <div className="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700">
                  <FaFacebook className="text-white text-xl" />
                </div>
                <div className="bg-red-600 p-3 rounded-full shadow-lg hover:bg-red-700">
                  <FaGoogle className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
