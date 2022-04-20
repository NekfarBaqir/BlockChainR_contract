require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
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
      url: "https://eth-rinkeby.alchemyapi.io/v2/1QdXIjeHppmC9wta664PeoiFErFwNW0m",
      accounts: [
        "9249acb00693e4567a758600cce8e3cbbf7e519a6b004bc3d00b1355902113a0",
      ],
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
};
