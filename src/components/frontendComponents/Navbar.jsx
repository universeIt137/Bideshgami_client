import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
// import logo from "../assets/img/logo.png";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { MdPersonAddAlt1 } from "react-icons/md";



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

        <div className="flex bg-[#0066FF] shadow-2xl  text-[white] font-semibold">
          <div className=" mx-auto w-5/6 flex">
            <div className="nav">
              <nav className="text-[14px]">
                <ul className=" flex flex-row justify-center items-center gap-8 py-[12px]">
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
            <div className="nav-left ml-6  flex justify-center items-center">
              <div>
                <li className="px-5 list-none text-[14px]"> En/বাংলা </li>
              </div>
              <div className="sign-up flex flex-row justify-around text-[14px]  items-center gap-2">
                <span>
                  {" "}
                  <MdPersonAddAlt1 className="text-xl " />{" "}
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
