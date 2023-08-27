import React from "react";
import {BiUser} from 'react-icons/bi';
import {FaDice} from 'react-icons/fa';
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import Lion from "./Lion.png";
const Navbar = (props) => {
  const navigate = useNavigate(); 
  return (
    <>
      <div
        className="h-[60px] shadow-md z-10 shadow-black flex flex-row justify-between p-3 font-semibold w-full text-center   text-white fixed "
        style={{
          backgroundImage: "linear-gradient(to left, #007bff, #00008b)",
        }}
      >
        <Link to={'/'}  >
        <p className="flex text-[25px] gap-2 cursor-pointer flex-row">
          D-Bet <span className="relative top-[.80px]" >< FaDice size={30} /></span>
        </p>
        </Link>
          <div className="  text-[17px] font-normal flex gap-10   flex-row  ">
          <Link to={"./fixtures"}>
            <button className="relative top-[5.5px] focus:underline   hover:text-blue-950 ">
              Fixture
            </button>
          </Link>
          <button className="   focus:underline   hover:text-blue-950   ">
            History
          </button>
          <button className="  focus:underline   hover:text-blue-950 ">
            About
          </button>
          <button
            className="flex flex-col items-center  focus:bg-blue-900 border-white border-[.25px] h-10 w-10 rounded-full ml-24  "
            onClick={() => navigate("/UserProfile")}
          >
            <span className="relative top-1" ><BiUser size={30} /></span>
            
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
