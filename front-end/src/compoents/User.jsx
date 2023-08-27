import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './contextProvider.jsx'; 
import {BiUser} from 'react-icons/bi';
const User = () => {
  const state = useContext(UserContext); 
  const [userData, setUserData] = useState(null);
  const withdraw =async()=>{
    const {contract} = state;
    console.log("here");

    const withDraw = await contract.withdraw({ gasLimit: 2000000 });
    await withDraw.wait();
    
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await state.contract.getUser();
        setUserData(user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [state.contract]);

  if (!userData) {
    return <div>Loading user data...</div>;
  }
  const balanceInEther = userData.balance / 10 ** 18;
  return (
    <div className='flex flex-col gap-6  max-w-sm text-white ' >
      <h2  className='font-bold flex felx-col justify-center items-center bg-blue-900 text-xl rounded-md shadow-md shadow-black text-center mb-4 ' ><BiUser size={50}  /><p>User Data</p></h2>
      <p className='bg-blue-900 p-2 text-lg font-semibold rounded-md shadow-md shadow-black' >Username: {userData.username}</p>
      <p className='bg-blue-900 p-2 text-lg font-semibold rounded-md shadow-md shadow-black' >Email: {userData.email}</p>
      <p className='bg-blue-900 p-2 text-lg font-semibold rounded-md shadow-md shadow-black' >Name: {userData.firstName+" "+userData.lastname}</p>
      <p className='bg-blue-900 p-2 text-lg font-semibold rounded-md shadow-md shadow-black'>Balance: {balanceInEther.toString()}</p>
      <button className='bg-blue-900 hover:bg-green-900  p-4 w-32 text-lg font-semibold rounded-md shadow-md shadow-black' onClick={withdraw} >  WithDraw</button>

    </div>
  );
};

export default User;
