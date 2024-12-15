import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
// import logo from "../assets/img/logo.png";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import Container from "../../shared/Container";
import { FaBell, FaUserPlus } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";


const Navbar = () => {

  const navlinks =
    <>
      <li  >
        {" "}
        <NavLink to={"/"}>Home</NavLink>{" "}
      </li>
      <li  >
        {" "}
        <NavLink to={"/air-ticket"}>Air-Ticket</NavLink>{" "}
      </li>
      <li  >
        {" "}
        <NavLink to={"/work-permit"}>Work Permit</NavLink>{" "}
      </li>
      <li  >
        {" "}
        <NavLink to={"/student"}>Student</NavLink>{" "}
      </li>
      <li  >
        {" "}
        <NavLink to={"/hajj-umrah"}>Hajj & Umrah</NavLink>{" "}
      </li>
      <li  >
        {" "}
        <NavLink to={"/"}>Visa Processing</NavLink>{" "}
      </li>
      <li  >
        {" "}
        <NavLink to={"/tour-package"}>Tour Package</NavLink>{" "}
      </li>
      <li  >
        {" "}
        <NavLink to={"/hotel-booking"}>Hotel Booking </NavLink>{" "}
      </li>
      <li  >
        {" "}
        <NavLink to={"/about-us"}>About us </NavLink>{" "}
      </li>
      <li className="px-5 list-none "> En/বাংলা </li>
      <div className="sign-up flex flex-row justify-around  items-center gap-1">
        <span>
          <FaUserPlus />
        </span>
        <NavLink to={"/login"}>Sign In</NavLink>
      </div>
    </>

  return (
    <>
      <div>
        <Container>
          <div className='mx-auto flex  lg:flex-row justify-between items-center'>
            <Link to="/">
              <div>
                <img src='https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099201/logo_j54wbc.png' className='w-48' alt='logo' />
              </div>
            </Link>
            <div className='flex items-center lg:flex-row  gap-3'>
              <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1724839287/Bideshgami%20images/Icons/m0zyxkqkudkqktsxwpl3.png" alt="" />
              <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1724839288/Bideshgami%20images/Icons/zncnualehalrad5qc8i2.png" alt="" />
            </div>
          </div>
        </Container>


        {/* MobileView Navbar  */}
        <div className="md:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeNavLinknecap="round"
                  strokeNavLinknejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-32 p-2 shadow bg-primary text-white">
              {navlinks}
            </ul>
          </div>
          {/* <div className='flex gap-5'>
            <Link to={"/"}>
              <img className='w-24 sm:w-40' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723099201/logo_j54wbc.png" alt="" />
            </Link>
          </div> */}
        </div>

        {/* Desktop views navlinks */}

        <div className="bg-[#0066FF] shadow-2xl  text-white font-medium  overflow-hidden py-3 lg:flex justify-center items-center hidden">
          <Container>
            <div className="nav w-full">
              <nav>
                <ul className=" flex flex-wrap justify-between items-center text-sm  border-black">
                  {navlinks}
                </ul>
              </nav>
            </div>
          </Container>

        </div>
      </div>
    </>
  );
};

export default Navbar;