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
              <RiMessage2Fill className='text-xl text-blue-600' />
              <FaBell className='text-xl text-blue-600' />
            </div>
          </div>
        </Container>

        <div className=" bg-[#0066FF] shadow-2xl px-10 text-white font-medium  overflow-hidden py-3 flex justify-center items-center">
          <Container>
            <div className="nav w-full">
              <nav>
                <ul className=" flex flex-wrap justify-between items-center text-sm ">
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
                    <NavLink to={"/visaDetails"}>Visa Details</NavLink>{" "}
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