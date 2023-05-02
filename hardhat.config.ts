import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config()

const accountKey = process.env.PRIVATE_KEY || "";
const config: HardhatUserConfig = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [accountKey]
    }
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_API_KEY}`,
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};

export default config;
