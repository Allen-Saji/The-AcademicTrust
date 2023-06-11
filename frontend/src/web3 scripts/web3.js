const dotenv = require("dotenv").config();
const Web3 = require("web3");

const rpcEndpoint = "https://sepolia.infura.io/v3/" + process.env.INFURA_KEY; // Replace with the actual RPC endpoint for Sepolia testnet
const web3 = new Web3(rpcEndpoint);

const contractAbi = require("./CertificateContract.json");
const contractAddress = "0x5249b1e72442868A889F13d91e03f76C7e67d0E0";
const contract = new web3.eth.Contract(contractAbi, contractAddress);
