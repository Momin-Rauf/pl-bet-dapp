import React, { useState } from 'react';
import { FaEthereum } from 'react-icons/fa';
import pl from './pl.png';
import './custom.css';
import abi from "./contract/betApp.json";
import {  useEffect } from "react";
import { ethers } from "ethers";


const Login = (props) => {
  
  const [connected,setConnected] = useState(false);
  const [account, setAccount] = useState("None");
  
  const connectWallet = async () => {
    const contractAddress = "0xcb8e92dfa6b033198f6d0b78deccc3f1363b495c";
    const contractABI = abi.abi;
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });
  
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
  
        setAccount(account);
        setConnected(true);
  
        // Use the values directly here, no need to use state
        props.stateSetter({
          provider,
          signer,
          contract,
        });
  
        console.log("Connected successfully.");
      } else {
        alert("Please install Metamask");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };
    
    
    
    return (
      <>{connected && <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Login Confirmation</h1>
      <p className="text-gray-600 mb-6">You have successfully logged in.</p>
      <button  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={()=>setConnected(false)} >Continue</button>
    
    </div>
  </div>
  }
      <div className='bet-text   flex flex-col justify-center items-start'>
        <div className='relative top-2 left-64 font-bold text-3xl animate-bounce-in-left'>
        Unleash the Thrill of Predicting Premier League Matches!
        </div>
        <img
          className='relative top-6 ' 
          style={{ left:'40%', transformOrigin: 'center' }}
          src={pl}
          alt=''
        />
      </div>
      <div className='absolute shadow-black shadow-lg flex flex-col justify-center items-center w-60 h-32 top-56 border-l-0 rounded-r-full bg-blue-900'>
        <label className='text-white text-lg font-bold' htmlFor=''>
          Connect with Metamask
        </label>
        <button
          onClick={()=>{connectWallet();
            }}
          className='rounded-full p-2 w-12 mt-1 hover:bg-blue-950 h-2 border-[1px] flex flex-row justify-center items-center py-6'
        >
          <FaEthereum size={25} color={'white'} />
        </button>
      </div>
      
    </>
  );
};

export default Login;