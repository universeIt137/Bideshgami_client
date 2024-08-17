import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import Container from "../../../shared/Container";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <div className="p-5 py-10">
        <div className=" bg-white flex items-center justify-center border-2 border-gray-300 rounded-xl">
          <div className="mx-auto">
            <div className="card shadow-md rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block">
                  <img
                    className="w-full rounded-lg"
                    src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723106697/Rectangle_145_s9ipdg.png"
                    alt="loginimg"
                  />
                </div>
                <div className="text-center md:text-left px-6">
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
        </div>
      </div>
    </Container>
  );
};

export default Login;
