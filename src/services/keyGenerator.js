//  TODO generate Public and private key for user: Done
import hash from "./hasher";
import RSA from "./rsa";

export const keyPair = () => {
  let keys = RSA.generate(128);

  const publicKey = keys.n;
  const privateKey = keys.d;
  const exp = keys.e;

  return [publicKey, privateKey, exp];
};
export default keyPair;
