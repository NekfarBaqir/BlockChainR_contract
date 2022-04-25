const hre = require("hardhat");

async function main() {

  const NFT = await hre.ethers.getContractFactory("NFTProject");
  const nft = await NFT.deploy("CodeGiantNFT", "CGN");

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  
// 0x762f28A319b7490171bdDe69ba9c1554691e35B8