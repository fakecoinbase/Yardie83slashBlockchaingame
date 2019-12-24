import hash from "./hasherService";

export const address = pub => {
  const results = hash(pub).substr(20);

  return "0x" + results;
};
