// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faCheckCircle, faUsers, faStore, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { BiUserCircle } from 'react-icons/bi';
// import Web3 from 'web3'; // Add this line to import Web3
// import { resolveName } from '@ensdomains/ensjs'; // Import ENS resolveName if you are using it


// const SideBar = (props) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [balance,setBalance] = useState(0);
//   const [Name,setName] = useState("");
    
//   useEffect(() => {
//     setIsOpen(true); // Set isOpen to true on initial load to trigger the animation
//     getAccountBalance();
//     getAccountName();
//   }, [props.acc]); // Add props.acc as a dependency
  
//   const getAccountBalance = async () => {
//     if (props.acc) {
//       const web3 = new Web3(window.ethereum);
//       try {
//         // Get the balance of the account in Wei units
//         const balanceWei = await web3.eth.getBalance(props.acc);
//         // Convert Wei to Ether units and update the balance state
//         const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
//         setBalance(balanceEther);
//       } catch (error) {
//         console.error('Error fetching account balance: ', error);
//       }
//     }
//   };
//   const getAccountName = async () => {
//     if (props.acc) {
//       try {
//         // Use ENS to resolve the human-readable name for the account
//         const name = await resolveName(props.acc);
//         setName(name || ''); // Set the name to empty string if not found
//       } catch (error) {
//         console.error('Error fetching account name: ', error);
//       }
//     }};
//     getAccountBalance();
//     getAccountName();
//   return (
//     <div className={`fixed z-40 flex flex-col top-1 rounded-2xl right-0 rounded-r-none  md:w-64 bg-blue-600 h-96 text-white transition-all duration-300 border-none  sidebar ${isOpen ? 'w-64' : 'w-14'}`}>
//       <div className="overflow-y-auto border-black border-[2px] border-r-0 rounded-r-none rounded-2xl overflow-x-hidden flex flex-col justify-between flex-grow">
//         <ul className="flex flex-col py-4 items-center space-y-1">
//         <li><BiUserCircle size={100} /></li>
//         <li>{balance}</li>
//         <li>Name:{Name}</li>
          
//         </ul>
//         <button className="mb-14 px-5 py-3 hidden md:block text-center text-xs hover:bg-blue-950 border-[1px] border-white rounded-xl m-20 ">Logout</button>
//       </div>
//     </div>
//   );
// };

// export default SideBar;
