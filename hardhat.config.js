require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();


module.exports = {
  solidity: "0.8.11",
  paths: {
    artifacts: "./artifacts",
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    rinkeby: {
      url: process.env.PROVIDER_RINKEBY,
      accounts: [process.env.PRIVATE_KEY],
    },
    // mainnet: {
    //   url: process.env.PROVIDER_MAINNET,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    // rinkeby: {
    //   url: process.env.PROVIDER_RINKEBY,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    // kovan: {
    //   url: process.env.PROVIDER_KOVAN,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    // bsc: {
    //   url: process.env.PROVIDER_BSC,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    // bscTest: {
    //   url: process.env.PROVIDER_BSC_TEST,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    // polygon: {
    //   url: process.env.PROVIDER_POLYGON,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    // mumbai: {
    //   url: process.env.PROVIDER_MUMBAI,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_KEY,
  },
};
