const KJUR = require("jsrsasign");

export const keyPair = () => {
  let keys = KJUR.KEYUTIL.generateKeypair("RSA", 512);

  const publicKey = keys.pubKeyObj;
  const privateKey = keys.prvKeyObj;

  return [publicKey, privateKey];
};

export default keyPair;
