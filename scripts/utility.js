
const objectMap = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(k, v, i)]));

const promiseAllObj = async (obj) =>
  Object.fromEntries(
    zip([Object.keys(obj), await Promise.all(Object.values(obj))])
  );
  
const signWhitelist = async (signer, contractAddress, userAccount, data) => {
  userAccount = ethers.utils.getAddress(userAccount);
  contractAddress = ethers.utils.getAddress(contractAddress);

  return await signer.signMessage(
    ethers.utils.arrayify(
      ethers.utils.keccak256(
        ethers.utils.defaultAbiCoder.encode(
          ["address", "bytes32", "address"],
          [contractAddress, data, userAccount]
        )
      )
    )
  );
};


module.exports = Object.freeze({
  signWhitelist,
  objectMap,
  promiseAllObj,
});
