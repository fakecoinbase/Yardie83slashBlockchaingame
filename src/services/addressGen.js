import hash from "./hasherService";

export const address = pub => {
  let results = hash(pub).substr(30);

  let hexResults = results.toString(16);

  return "0xBc" + hexResults;
};
