import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CORE_TESTNET_URL_KEY = process.env.CORE_TESTNET_URL_KEY;
const CORESCAN_API_KEY = process.env.CORESCAN_API_KEY || "";

const config: HardhatUserConfig = {
  defaultNetwork: "coretestnet",
  networks: {
    hardhat: {},
    coretestnet: {
      url: CORE_TESTNET_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 1115,
      gas: "auto",
      gasPrice: 1_000_000_000,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.22",
        settings: {
          evmVersion: "shanghai",
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  etherscan: {
    apiKey: {
      coretestnet: CORESCAN_API_KEY,
    },
    customChains: [
      {
        network: "coretestnet",
        chainId: 1115,
        urls: {
          apiURL: "https://scan.test.btcs.network/api",
          browserURL: "https://scan.test.btcs.network",
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};

export default config;
