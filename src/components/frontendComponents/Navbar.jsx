import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
// import logo from "../assets/img/logo.png";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessageSquareDetail } from "react-icons/bi";



const Navbar = () => {
  return (
    <>
      <div>
        {/* 1. Top Bar  */}
        <div className='container px-2 lg:px-0 md:w-5/6 mx-auto flex  lg:flex-row justify-between items-center'>
          <Link to="/">
            <div>
              <img src='https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099201/logo_j54wbc.png' className='w-32 lg:w-48' alt='logo' />
            </div>
          </Link>
          <div className='flex items-center lg:flex-row gap-5'>
            <BiSolidMessageSquareDetail className='text-xl text-blue-600' />
            <IoIosNotifications className='text-2xl text-blue-600' />
          </div>
        </div>

        <div className="navbar bg-[#0066FF] shadow-2xl px-10 text-[white] font-medium border ">
          <div className=" mx-auto ">
            <div className="nav">
              <nav>
                <ul className=" flex flex-row justify-center items-center gap-8">
                  <li className="">
                    {" "}
                    <NavLink to={"/"}>Home</NavLink>{" "}
                  </li>
                  <li className="">
                    {" "}
                    <NavLink to={"/air-ticket"}>Air-Ticket</NavLink>{" "}
                  </li>
                  <li className="">
                    {" "}
                    <NavLink to={"/work-permit"}>Work Permit</NavLink>{" "}
                  </li>
                  <li className="">
                    {" "}
                    <NavLink to={"/student"}>Student</NavLink>{" "}
                  </li>
                  <li className="">
                    {" "}
                    <NavLink to={"/hajj-umrah"}>Hajj & Umrah</NavLink>{" "}
                  </li>
                  <li className="">
                    {" "}
                    <NavLink to={"/visaDetails"}>Visa Details</NavLink>{" "}
                  </li>
                  <li className="">
                    {" "}
                    <NavLink to={"/tour-package"}>Tour Package</NavLink>{" "}
                  </li>
                  <li className="">
                    {" "}
                    <NavLink to={"/hotel-booking"}>Hotel Booking </NavLink>{" "}
                  </li>
                  <li className="">
                    {" "}
                    <NavLink to={"/about-us"}>About us </NavLink>{" "}
                  </li>
                </ul>
              </nav>
            </div>
            <div className="nav-left ml-6  flex ">
              <li className="px-5 list-none "> En/বাংলা </li>
              <div className="sign-up flex flex-row justify-around  items-center ">
                <span>
                  {" "}
                  <FaRegUser />{" "}
                </span>
                <NavLink to={"/login"}>Sign In</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
