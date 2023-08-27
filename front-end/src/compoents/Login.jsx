import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import pl from "./pl.png";
import "./custom.css";
import plvideo from "./plvideo.mp4";
import abi from "./contract/betApp.json";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { ethers } from "ethers";
import UserDataForm from "./UserDataForm";

const Login = (props) => {
  const check = (userdata) => {
    if (userdata.Email !== undefined) {
      console.log(userdata.Email);
      setShowForm(true);
    } else {
      console.log(userdata.Email);
      setShowForm(false);
    }
  };
  const [showForm, setShowForm] = useState(false);
  const [filled, setFilled] = useState(false);
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("None");
  const connectWallet = async () => {
    const contractAddress = "0x29af7e44bfd37f9d5abf409a6a1124da9bf89fc7";
    const contractABI = abi.abi;
    
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
        const add = await account[0];
        let ad = add.toString();
        console.log(typeof ad);
        props.setAddress(ad);
        setConnected(true);

        props.stateSetter({
          provider,
          signer,
          contract,
        });

        check(contract.getUser());
      } else {
        alert("Please install Metamask");
      }
    } 
  
  // props.setAddress(USER);

  return (
    <>
      {connected && (
        <div className="flex absolute z-20 left-[45%] top-[50%] justify-center items-center h-[100px] bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Login Confirmation</h1>
            <p className="text-gray-600 mb-6">
              You have successfully logged in.
            </p>

            <Link to={"userDataForm"} duration={2000} smooth={true}>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => {
                  setConnected(false);
                }}
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="bet-text   flex flex-col justify-center items-start">
        <div className="relative top-2 z-20 text-white  left-[480px]  font-extrabold text-opacity-80 text-xl animate-bounce-in-left">
          Unleash the Thrill of Predicting Premier League Matches!
        </div>
        <img
          className="relative w-56 h-56 bottom-28 left-[0px] "
          src={pl}
          alt=""
        />
      </div>
      <div className="absolute shadow-black shadow-lg flex flex-col justify-center items-center w-60 h-32 top-[70%] border-l-0 rounded-r-full bg-blue-900">
        <label className="text-white text-lg font-bold" htmlFor="">
          Connect with Metamask
        </label>
        <button
          onClick={() => {
            connectWallet();
          }}
          className="rounded-full p-2 w-12 mt-1 hover:bg-blue-950 h-2 border-[1px] flex flex-row justify-center items-center py-6"
        >
          <FaEthereum size={25} color={"white"} />
        </button>
      </div>
      <div className="sm:absolute   rounded-xl shadow-md shadow-black p-2 bg-blue-900 sm:right-[170px] sm:top-[150px]">
        <video className="sm:visible " width={640} height={320} loop autoPlay controls>
          <source src={plvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {showForm && <UserDataForm check={check} />}
    </>
  );
};

export default Login;
