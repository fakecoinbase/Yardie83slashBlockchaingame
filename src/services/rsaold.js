const bigInt = require("big-integer");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  RSA simple                                                            (c) Bob van Luijt 2015  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/**
 * RSA hash function reference implementation.
 *
 * @namespace
 */
const RSA = {};

/**
 * Generates an RSA hash
 * https://en.wikipedia.org/wiki/RSA_(cryptosystem)#A_working_example
 *
 * @returns {array} Result of RSA generation
 */
RSA.generate = function() {
  /**
   * Calculate modular multiplicative inverse.
   * https://en.wikipedia.org/wiki/Modular_multiplicative_inverse
   * Function based on PHP variant on http://rosettacode.org/wiki/Modular_inverse
   *
   * @param   {a} int
   * @param   {n} int
   * @returns {int} Result of modular multiplicative inverse.
   */
  function modular_multiplicative_inverse(a, n) {
    var t = 0,
      nt = 1,
      r = n,
      nr = a % n;
    if (n < 0) {
      n = -n;
    }
    if (a < 0) {
      a = n - (-a % n);
    }
    while (nr !== 0) {
      var quot = (r / nr) | 0;
      var tmp = nt;
      nt = t - quot * nt;
      t = tmp;
      tmp = nr;
      nr = r - quot * nr;
      r = tmp;
    }
    if (r > 1) {
      return -1;
    }
    if (t < 0) {
      t += n;
    }
    return t;
  }

  /**
   * Generates a random prime
   *
   * @param   {min} int, minimal value
   * @param   {max} int, maximal value
   * @returns {int} a random generated prime
   */
  function random_prime(min, max) {
    var p = Math.floor(Math.random() * (max - 1 - min + 1)) + min;
    if (bigInt(p).isPrime() === true) {
      return p;
    } else {
      return random_prime(min, max);
    }
  }

  // generate values
  var p = random_prime(1, 10000000), // 8 bit
    q = random_prime(1, 10000000), // 8 bit
    n = p * q,
    t = (p - 1) * (q - 1), // totient as φ(n) = (p − 1)(q − 1)
    e = random_prime(1, t),
    d = modular_multiplicative_inverse(e, t);
  return {
    n: n, // public key (part I)
    e: e, // public key (part II)
    d: d // private key
  };
};

/**
 * Encrypt
 * Uses BigInteger.js https://peterolson.github.com/BigInteger.js
 *
 * @param   {m} int, the 'message' to be encoded
 * @param   {n} int, n value returned from generate_rsa() aka public key (part I)
 * @param   {e} int, e value returned from generate_rsa() aka public key (part II)
 * @returns {int} encrypted hash
 */

RSA.encrypt = function(m, n, e) {
  const codes = m
    .split("")
    .map(i => i.charCodeAt())
    .join("");
  console.log("message to encrypt " + codes);
  let rez = bigInt(codes)
    .pow(e)
    .mod(n);
  console.log("rez " + rez);
  return rez;
};

/**
 * Decrypt
 * Uses BigInteger.js https://peterolson.github.com/BigInteger.js
 *
 * @param   {mEnc} int, the 'message' to be decoded (encoded with RSA_encrypt())
 * @param   {d} int, d value returned from generate_rsa() aka private key
 * @param   {n} int, n value returned from generate_rsa() aka public key (part I)
 * @returns {int} decrypted hash
 */

RSA.decode = function(code) {
  let stringified = code.toString();
  console.log(stringified);
  let string = "";

  for (let i = 0; i < stringified.length; i += 2) {
    let num = Number(stringified.substr(i, 2));

    if (num <= 30) {
      string += String.fromCharCode(Number(stringified.substr(i, 3)));
      i++;
    } else {
      string += String.fromCharCode(num);
    }
  }

  return string;
};

RSA.decrypt = function(mEnc, d, n) {
  return bigInt("0" + mEnc)
    .pow(d)
    .mod(n);
};
export default RSA;