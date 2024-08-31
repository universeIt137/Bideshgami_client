import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="w-10/12 mx-auto">
        <div className="lg:flex items-center shadow-2xl rounded-lg my-10">
          <div className="lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725097346/Bideshgami%20images/Service%20Details/icons/tzhpntiq4efn5vfmtzrh.png"
              alt="loginimg"
            />
          </div>

          <div className="text-center lg:w-1/2 h-full md:text-left px-6">

            <div className="w-8/12 mx-auto pb-5">
              <h2 className="text-blue-600 font-bold text-[44px] mb-6 text-center">Log In</h2>
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
                className="block text-blue-600 font-semibold text-xs mb-4 text-right"
                to="/forgot-password"
              >
                Forget Password
              </Link>
              <button className="block mx-auto py-1 px-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 rounded-lg focus:outline-none">
                Login
              </button>
              <div className="mt-4 text-center text-sm">
                <span className="text-gray-600">
                  Not a member?{" "}
                </span>
                <Link className="text-blue-600 font-semibold" to="/sign-up">
                  Create New Account
                </Link>
              </div>
              <div className="mt-6 flex justify-center gap-4">
                <div className="bg-white rounded-full inputShadow hover:bg-white size-10 flex justify-center items-center">
                  <FaFacebook className="text-blue-500 text-[28px]" />
                </div>
                <div className="bg-white rounded-full inputShadow hover:bg-white size-10 flex justify-center items-center">
                  <FcGoogle className="text-[28px]" />
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
};

export default LoginPage
