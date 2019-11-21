//  TODO generate Public and private key for user
import hash from "./hasher";
import RSA from "./rsa";

export const keyPair = () => {
  let keys = RSA.generate();

  let msg = "ABC";

  let encryptedMSG = RSA.encrypt(msg, keys.n, keys.e);

  console.log("encoded hello", encryptedMSG);

  let decryptedMg = RSA.decrypt(encryptedMSG, keys.d, keys.n);

  console.log("decrypted message", decryptedMg);

  console.log("decoded msg", RSA.decode(decryptedMg));

  //let decrypteddecodedMsg = RSA.decrypt(decodedMsg, keys.d, keys.n);
  //console.log("decrypted", decrypteddecodedMsg);

  //   return [publicKey, privateKey];
  return keys;
};
export default keyPair;
