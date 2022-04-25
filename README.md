# NFT Project with hardhat
This NFT contract is written with solidity programming language, and configured with hardhat environment for deployment, debug, test and verify.

## some of the outstanding features of this nft contract.
- Has an off chain whitelist functionality with signing a message and getting signatures
- Tried to use less deployment gas.
- Tried to follow the best practices


### How to use it!
1. `clone the repo`
2. `cd NFTContract`
3. `yarn` or `npm i` 
4. `create an .env file in the root directory as .env.example`


### How to compile, deploy, verify and test using hardhat

#### compile
`npx hardhat compile`

#### deploy 
You should have the provider url and the account private key in .env file
`npx hardhat run ./scripts/deploy.js --network networkName`

#### verify on etherscan
You should have etherscan key in .env file
`npx hardhat verify --network networkName  CONTRACT_ADDRESS  "ARGUMENT NUM1" "ARGUMENT NUM2"`

#### test
This part will come soon


### How to generate the whitelist signatures!
1. I have written a `whitelist.js` file and you should put your deployed contract address with number of NFT you want to give permission to that address there!
2. run this script   `npx hardhat run ./scripts/generateWhiteList.js --network networkName`
**Note: This will sign a message with signer account, person wants to be whitelisted account and the max whitelist number**
3. now you can pass the signature to the `whiteListMint` with max whitelist number. ( `await ethersContract.whiteListMint(amount,maxWLNumber,signature)`)


### An example of this contract on etherscan
[LINT TO ETHERSCAN](https://rinkeby.etherscan.io/address/0x762f28A319b7490171bdDe69ba9c1554691e35B8)



