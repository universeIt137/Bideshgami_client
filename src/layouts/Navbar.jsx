import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import logo from "../assets/img/logo.png";
import { FaCommentDots } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      

      <div className="border border-black flex justify-between">
        <div className="logo">
          <img className="w-[187px] h-[66px] " src={logo} alt="....." />
        </div>
        <div className="notification  ">
          <span className=" block ">
            <FaCommentDots />{" "}
          </span>
          <span>
            <IoIosNotifications />
          </span>
        </div>
      </div>
      <div className="navbar bg-[#0066FF] shadow-2xl px-10 text-[white] font-medium    ">
        <div className="nav">
          <nav>
            <ul className=" flex flex-row justify-center items-center ">
              <li className="px-3">
                {" "}
                <NavLink to={"/"}>Home</NavLink>{" "}
              </li>
              <li className="px-3">
                {" "}
                <NavLink to={"/air-ticket"}>Air-Ticket</NavLink>{" "}
              </li>
              <li className="px-3">
                {" "}
                <NavLink to={"/work-permit"}>Work Permit</NavLink>{" "}
              </li>
              <li className="px-3">
                {" "}
                <NavLink to={"/student"}>Student</NavLink>{" "}
              </li>
              <li className="px-3">
                {" "}
                <NavLink to={"/hajj-umrah"}>Hajj & Umrah</NavLink>{" "}
              </li>
              <li className="px-3">
                {" "}
                <NavLink to={"/visa-processing"}>Visa Processing</NavLink>{" "}
              </li>
              <li className="px-3">
                {" "}
                <NavLink to={"/tour-package"}>Tour Package</NavLink>{" "}
              </li>
              <li className="px-3">
                {" "}
                <NavLink to={"/hotel-booking"}>Hotel Booking </NavLink>{" "}
              </li>
              <li className="px-3">
                {" "}
                <NavLink to={"/about-us"}>About us </NavLink>{" "}
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav-left ml-6 ">
          <li className="px-5 list-none "> En/বাংলা </li>
          <div className="sign-up flex flex-row justify-around  items-center ">
            <span>
              {" "}
              <FaRegUser />{" "}
            </span>
            <NavLink to={"/sign-in"}>Sign In</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
