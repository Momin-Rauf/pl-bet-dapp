import React, { useState } from 'react';
import { ethers } from "ethers";
import { useContext } from 'react';
import { UserContext } from './contextProvider.jsx'; // Correct import path
import User from './User.jsx';
import { useEffect } from 'react';

const UserDataForm = (props) => {
  const state = useContext(UserContext);
  
  const [Name,setName] = useState('');
  const [Email,setEmail] = useState('');
  const [FirstName,setFirstName] = useState('');
  const [LastName,setLastName] = useState('');
 
  const [check,setCheck] = useState(false);

  

  const SubmitHandler = async (event) => {
    event.preventDefault();
    const {contract} = state;
    console.log("heelo ",contract);
     
    const balance = new ethers.utils.parseEther("0.000001");
    const user = await contract.createUser(Name,Email,FirstName,LastName,balance);
    await user.wait();
    const userdata = await state.contract.getUser();
    
    props.check(userdata);
    
   }
  
  return (
    <>
    {!check ? <div id='userDataForm' className="flex pt-10 bg-blue-200 justify-center items-center h-screen bg-dark-blue">
      <div  className=" p-8 rounded bg-blue-800 shadow-blue-600 shadow-lg  w-72 h-54 text-center">
        <h2 className="text-blue text-white text-xl font-semibold mb-4">Please enter details</h2>
        <form className="text-white" action="" onSubmit={SubmitHandler}>
          <input className=" focus:outline-1 text-black focus:outline-blue-950 bg-blue shadow-sm  my-2 py-1 px-2 rounded-lg shadow-black " type="text" placeholder="UserName" value={Name} onChange={(e) => setName(e.target.value)} />
          <input className=" focus:outline-1 text-black focus:outline-blue-950 bg-blue shadow-sm  my-2 py-1 px-2 rounded-lg shadow-black " type="text" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
          <input className=" focus:outline-1 text-black focus:outline-blue-950 bg-blue shadow-sm  my-2 py-1 px-2 rounded-lg shadow-black " type="text" placeholder="First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
          <input className=" focus:outline-1 text-black focus:outline-blue-950 bg-blue shadow-sm  my-2 py-1 px-2 rounded-lg shadow-black " type="text" placeholder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} />
          <button className="bg-gray-800 hover:bg-blue-600 text-white py-1 px-4 rounded" type="submit">Submit</button>
        </form>
      </div>
    </div>:null}
  </>
  

  )
};
export default UserDataForm;

