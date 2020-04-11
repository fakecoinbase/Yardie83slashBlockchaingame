import hash from "./hasherService";
import { BlockType } from "../customHooks/useBlock/useBlock";

const miningService = (data: BlockType) => {
  console.log(data)
  let blockData =
    data.blockNumber +
    ":" +
    data.previousBlockHash +
    ":" +
    data.merkleRoot +
    ":" +
    data.difficulty! +
    ":" +
    data.timestamp!;
  let nonce;
  for (let i = 0; i < 999; i++) {
    let hashedData = blockData + ":" + i;
    if (hash(hashedData) !== undefined) {
      if (parseInt(hash(hashedData)!.charAt(0)) === 0) {
        console.log(hash(hashedData))
        //to increase difficulty to 2, uncomment the next line
        //if (hash(hashedData).charAt(0) == 0 && hash(hashedData).charAt(1) == 0 ) {
        nonce = i;
        break;
      } else continue;
    }
  }
  return nonce;
};

export default miningService;
