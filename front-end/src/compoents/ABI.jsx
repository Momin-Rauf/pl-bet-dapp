import React from 'react'

const ABI = () => {
    const ABI = [
        {
             inputs: [
                  {
                       internalType: "string",
                       name: "side1",
                       type: "string",
                  },
                  {
                       internalType: "string",
                       name: "side2",
                       type: "string",
                  },
                  {
                       internalType: "string",
                       name: "sport",
                       type: "string",
                  },
             ],
             name: "addFixture",
             outputs: [],
             stateMutability: "nonpayable",
             type: "function",
        },
        {
             inputs: [
                  {
                       internalType: "uint256",
                       name: "id",
                       type: "uint256",
                  },
                  {
                       internalType: "uint256",
                       name: "result",
                       type: "uint256",
                  },
             ],
             name: "endFixture",
             outputs: [],
             stateMutability: "nonpayable",
             type: "function",
        },
        {
             inputs: [
                  {
                       internalType: "uint256",
                       name: "id",
                       type: "uint256",
                  },
                  {
                       internalType: "uint256",
                       name: "option",
                       type: "uint256",
                  },
             ],
             name: "placeBet",
             outputs: [],
             stateMutability: "payable",
             type: "function",
        },
        {
             inputs: [],
             name: "withdraw",
             outputs: [],
             stateMutability: "payable",
             type: "function",
        },
        {
             inputs: [
                  {
                       internalType: "address",
                       name: "",
                       type: "address",
                  },
             ],
             name: "accounts",
             outputs: [
                  {
                       internalType: "uint256",
                       name: "",
                       type: "uint256",
                  },
             ],
             stateMutability: "view",
             type: "function",
        },
        {
             inputs: [],
             name: "betCount",
             outputs: [
                  {
                       internalType: "uint256",
                       name: "",
                       type: "uint256",
                  },
             ],
             stateMutability: "view",
             type: "function",
        },
        {
             inputs: [
                  {
                       internalType: "uint256",
                       name: "",
                       type: "uint256",
                  },
             ],
             name: "bets",
             outputs: [
                  {
                       internalType: "uint256",
                       name: "id",
                       type: "uint256",
                  },
                  {
                       internalType: "address",
                       name: "better",
                       type: "address",
                  },
                  {
                       internalType: "uint256",
                       name: "option",
                       type: "uint256",
                  },
                  {
                       internalType: "uint256",
                       name: "payment",
                       type: "uint256",
                  },
                  {
                       internalType: "uint256",
                       name: "balance",
                       type: "uint256",
                  },
             ],
             stateMutability: "view",
             type: "function",
        },
        {
             inputs: [],
             name: "fixtureCount",
             outputs: [
                  {
                       internalType: "uint256",
                       name: "",
                       type: "uint256",
                  },
             ],
             stateMutability: "view",
             type: "function",
        },
        {
             inputs: [
                  {
                       internalType: "uint256",
                       name: "",
                       type: "uint256",
                  },
             ],
             name: "fixtures",
             outputs: [
                  {
                       internalType: "uint256",
                       name: "id",
                       type: "uint256",
                  },
                  {
                       internalType: "string",
                       name: "side1",
                       type: "string",
                  },
                  {
                       internalType: "string",
                       name: "side2",
                       type: "string",
                  },
                  {
                       internalType: "string",
                       name: "sport",
                       type: "string",
                  },
                  {
                       internalType: "bool",
                       name: "results_announced",
                       type: "bool",
                  },
                  {
                       internalType: "uint256",
                       name: "result",
                       type: "uint256",
                  },
                  {
                       internalType: "uint256",
                       name: "side1pool",
                       type: "uint256",
                  },
                  {
                       internalType: "uint256",
                       name: "side2pool",
                       type: "uint256",
                  },
                  {
                       internalType: "bool",
                       name: "active",
                       type: "bool",
                  },
             ],
             stateMutability: "view",
             type: "function",
        },
        {
             inputs: [],
             name: "getBalance",
             outputs: [
                  {
                       internalType: "uint256",
                       name: "",
                       type: "uint256",
                  },
             ],
             stateMutability: "view",
             type: "function",
        },
   ];
   
  return ABI;
}

export default ABI