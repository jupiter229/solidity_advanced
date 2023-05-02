import { ethers } from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

const LockContract = require("../artifacts/contracts/Lock.sol/Lock.json");

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider("goerli", process.env.ALCHEMY_API_KEY);

// Signer
const accountKey = process.env.PRIVATE_KEY || "";
const signer = new ethers.Wallet(accountKey, alchemyProvider);

// Contract
const lockContract = new ethers.Contract("0xb4fd14c3181D798808705F32894240c13439E739", LockContract.abi, signer);

const main = async () => {
  try {
    const withdraw = await lockContract.withdraw();
    console.log("The withdarw status is: ", withdraw);
  } catch (error) {
    console.log("error happened: ", error)
  }
};

main(); // Call the main function to execute the code.