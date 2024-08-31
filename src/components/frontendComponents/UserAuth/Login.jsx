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
      <div className="p-5 py-10 w-10/12 mx-auto">
        <div className=" bg-white flex items-center justify-center border-2 border-gray-300 rounded-xl">
          <div className="mx-auto">
            <div className="card shadow-md rounded-lg">
              

            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
