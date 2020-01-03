import hash from "./hasherService";

const miningService = data => {
  let nonce;
  for (let i = 0; i < 999; i++) {
    let hashedData = data + ":" + i;
    if (hash(hashedData).charAt(0) === 0) {
      //to increase difficulty to 2, uncomment the next line
      //if (hash(hashedData).charAt(0) == 0 && hash(hashedData).charAt(1) == 0 ) {
      nonce = i;
      break;
    } else continue;
  }
  return nonce;
};

export default miningService;
