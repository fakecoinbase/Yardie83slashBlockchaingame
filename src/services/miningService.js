import hash from "./hasherService";

const miningService = data => {
  let nonce;
  console.log("nonce begining", nonce);

  for (let i = 0; i < 999; i++) {
    let hashedData = data + ":" + i;
    if (hash(hashedData).charAt(0) == 0) {
      //to increase difficualty to 2, please uncomment the next line'
      //if (hash(hashedData).charAt(0) == 0 && hash(hashedData).charAt(1) == 0 ) {
      nonce = i;
      console.log("hash", hash(hashedData));
      break;
    } else continue;
  }
  console.log("nonce later", nonce);

  return nonce;
};

export default miningService;
