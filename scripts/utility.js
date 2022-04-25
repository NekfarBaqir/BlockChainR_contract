const { BigNumber } = require("ethers");
const { clone } = require("lodash");

// helpers

const zip = (rows) => rows[0].map((_, c) => rows.map((row) => row[c]));

const objectMap = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(k, v, i)]));

const promiseAllObj = async (obj) =>
  Object.fromEntries(
    zip([Object.keys(obj), await Promise.all(Object.values(obj))])
  );

// misc

const signWhitelist = (signer, contractAddress, userAccount, data) => {
  userAccount = ethers.utils.getAddress(userAccount);
  contractAddress = ethers.utils.getAddress(contractAddress);

  return signer.signMessage(
    ethers.utils.arrayify(
      ethers.utils.keccak256(
        ethers.utils.defaultAbiCoder.encode(
          ["address", "address", "uint256"],
          [contractAddress, userAccount, data]
        )
      )
    )
  );
};

module.exports = Object.freeze({
  signWhitelist,
  zip,
  objectMap,
  promiseAllObj,
});
