const ethers = require("ethers");
const contractAbi = require("./CertificateContract.json");

const INFURA_KEY = process.env.INFURA_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const rpcEndpoint = "https://sepolia.infura.io/v3/" + INFURA_KEY; // Replace with the actual RPC endpoint for Sepolia testnet
const provider = new ethers.providers.JsonRpcProvider(rpcEndpoint);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const abiArray = contractAbi.abi;
const contractAddress = process.env.CONTRACT_ADDRESS;
const certificateContract = new ethers.Contract(
  contractAddress,
  abiArray,
  provider
);

module.exports = {
  provider,
  wallet,
  certificateContract,
};
