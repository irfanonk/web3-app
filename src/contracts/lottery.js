import web3 from "web3";
const address = process.env.REACT_APP_LOTTERY_ADDRESS;
const abi = process.env.REACT_APP_LOTTERY_ABI;

export default web3.eth.Contract(abi, address);
