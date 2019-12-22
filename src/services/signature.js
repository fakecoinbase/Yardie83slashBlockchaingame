// const bigInt = require("big-integer");

const KJUR = require("jsrsasign");
const keys = require("./keyGenerator");

export const sign = (para1, para2, para3) => {
  //for a sign function, we need hash of message (para1), secret key D (para2)
  const pair = keys.keyPair();

  const pubKey = pair[0];
  console.log("pub Key from sign", pubKey);

  const privKey = pair[1];
  console.log("priv Key from sign", privKey);

  //load priv obj
  const priv = KJUR.KEYUTIL.getKey(privKey);
  let sig = new KJUR.crypto.Signature({ alg: "SHA1withRSA" });

  console.log(priv);
  console.log(sig);
  sig.init(priv);

  sig.updateString(para1);
  //init sign

  return sig.sign();
};

export const check = ({ para1, para2, para3 }) => {
  const pair = keys.keyPair();

  const pubKey = pair[0];
  console.log("pub Key from sign", pubKey);

  const privKey = pair[1];
  console.log("priv Key from sign", privKey);

  // Load public key
  const pub = KJUR.KEYUTIL.getKey(pubKey);

  //load priv obj
  const priv = KJUR.KEYUTIL.getKey(privKey);

  let sig = new KJUR.crypto.Signature({ alg: "SHA1withRSA" });

  sig.init(priv);

  sig.updateString("aa");

  const results = sig.sign();
  sig.init(pub);

  const isValidSig = sig.verify(results);

  return isValidSig;
};

// function decimalToHex(d, padding) {
//   let BigInt = bigInt;
//   var hex = BigInt(d).toString(16);
//   padding =
//     typeof padding === "undefined" || padding === null
//       ? (padding = 2)
//       : padding;

//   while (hex.length < padding) {
//     hex = "0" + hex;
//   }

//   return hex;
// }

// var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
// var b64padchar = "=";

// function hex2b64(h) {
//   var i;
//   var c;
//   var ret = "";
//   for (i = 0; i + 3 <= h.length; i += 3) {
//     c = parseInt(h.substring(i, i + 3), 16);
//     ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
//   }
//   if (i + 1 == h.length) {
//     c = parseInt(h.substring(i, i + 1), 16);
//     ret += b64map.charAt(c << 2);
//   } else if (i + 2 == h.length) {
//     c = parseInt(h.substring(i, i + 2), 16);
//     ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
//   }
//   while ((ret.length & 3) > 0) ret += b64padchar;
//   return ret;
// }
