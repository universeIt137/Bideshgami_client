import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
// import logo from "../assets/img/logo.png";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";


const Navbar = () => {
  return (
    <>
      <div>
        <div className='container mx-auto flex  lg:flex-row justify-between items-center'>
          <Link to="/">
            <div>
              <img src='https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099201/logo_j54wbc.png' className='w-48' alt='logo' />
            </div>
          </Link>
          <div className='flex items-center lg:flex-row '>
            <IoIosNotifications className='text-3xl text-blue-600' />
            <BiSolidMessageRoundedDetail className='text-3xl text-blue-600' />
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
                  <NavLink to={"/visaDetails"}>Visa Details</NavLink>{" "}
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
              <NavLink to={"/login"}>Sign In</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
