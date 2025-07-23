import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const SEPOLIA_URL_KEY = process.env.SEPOLIA_URL_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERESCAN_KEY = process.env.ETHERESCAN_KEY;
// const HARDHAT_ETHERSCAN_API_KEY = process.env.HARDHAT_ETHERSCAN_API_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.30",
  networks: {
    sepolia: {
      url: SEPOLIA_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: ETHERESCAN_KEY
  },
};

export default config;
