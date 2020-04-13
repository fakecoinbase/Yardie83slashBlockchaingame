import hash from "./hasherService";

const merkle = (txHashes) => {
  if (txHashes.length === 0) return "";
  if (txHashes.length === 1) {
    return hash(txHashes[0])
  }
  let temp = [];
  while (txHashes.length !== 0) {
    if (txHashes.length > 1) {
      const first = txHashes.pop();
      const second = txHashes.pop();
      temp.push(hash(first + second));
    }
    if (txHashes.length === 1) {
      temp.push(hash(txHashes.pop()))
    }
  }
  return merkle(temp);
}

export default merkle;
