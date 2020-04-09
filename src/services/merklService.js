import hash from "./hasherService";

const merklService = (i1, i2, i3, i4) => {

  if (i1 != null && i2 != null && i3 != null && i4 != null) {
    let first = hash(i1 + i2);
    let second = hash(i3 + i4);
    return hash(first + second);
  } else if (i1 != null && i2 != null && i3 != null) {
    let first = hash(i1 + i2);
    let second = hash(i3);
    return hash(first + second);
  } else if (i1 != null && i2 != null) {
    let first = hash(i1 + i2);
    return first;
  } else if (i1 != null) {
    let first = hash(i1);
    return first;
  }
  return "Error! Check inputs";
};

export default merklService;
