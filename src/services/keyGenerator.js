//  TODO generate Public and private key for user
import hash from "./hasher";
import RSA from "./rsa";

export const keyPair = () => {
  let keys = RSA.generate(128);
  console.log("private key", keys.d, "publick key", keys.n, "e>", keys.e);

  let msg = "Mother Fucker";

  let encodedMsg = RSA.encode(msg);
  console.log("encoded msg", encodedMsg);

  let encryptedMSG = RSA.encrypt(encodedMsg, keys.n, keys.e);
  console.log("encrypted msg", encryptedMSG);

  let decryptedMg = RSA.decrypt(encryptedMSG, keys.d, keys.n);

  console.log("decrypted message", decryptedMg);

  console.log("decoded msg", RSA.decode(decryptedMg));

  //let decrypteddecodedMsg = RSA.decrypt(decodedMsg, keys.d, keys.n);
  //console.log("decrypted", decrypteddecodedMsg);

  //   return [publicKey, privateKey];
  return keys;
};
export default keyPair;
