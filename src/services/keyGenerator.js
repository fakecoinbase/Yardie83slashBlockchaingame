//  TODO generate Public and private key for user: Done
// import hash from "./hasher";
// import RSA from "./rsa";

const KJUR = require("jsrsasign");

export const keyPair = () => {
  let keys = KJUR.KEYUTIL.generateKeypair("RSA", 512);

  const publicKey = keys.pubKeyObj;
  const privateKey = keys.prvKeyObj;

  const formPub = KJUR.KEYUTIL.getPEM(publicKey);
  const formPriv = KJUR.KEYUTIL.getPEM(privateKey, "PKCS8PRV");

  console.log("form pub key>" + formPub);
  console.log("form priv key>", formPriv);

  return [publicKey, privateKey];
};

export default keyPair;
