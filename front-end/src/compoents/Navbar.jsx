import React from 'react';

import { Navigate,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Lion from './Lion.png'
const Navbar = (props) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (<>
    <div className='h-20 drop-shadow-2xl z-10 shadow-black flex flex-row justify-between p-3 font-extrabold items-center w-full text-center text-3xl  text-white fixed ' style={{
      backgroundImage: 'linear-gradient(to left, #007bff, #00008b)',}}><p  className='flex flex-row' >BET APP <img className='w-16' src={Lion} alt="" /></p>
    <div className='font-serif font-light text-md ' >
   <Link to={'./fixtures'} > <button className=' rounded-2xl  hover:text-blue-800 focus:bg-blue-950  text-base p-2 '  >Fixture</button></Link>
    <button className=' rounded-2xl  hover:text-blue-800 focus:bg-blue-950  text-base p-2 m-2' >History</button>
    <button className=' rounded-2xl  hover:text-blue-800 focus:bg-blue-950  text-base p-2 mr-10' >About</button>
    <button className='p-2 m-2 rounded-full focus:bg-blue-950  ' onClick={()=>navigate('/UserProfile')} >User</button>
    </div>

    
    </div></>
  )
}

export default Navbar