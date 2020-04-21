// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //To split, you must convert number to string
  const reversedInt = Math.abs(n).toString().split("").reverse().join("");
  return Math.sign(n) * reversedInt;
}

/* 
// Alternative solution
function reverseInt(n) {
  const reversedInt = n.toString().split("").reverse().join("");
  const parsed = parseInt(reversedInt);
  return n < 0 ? parsed * -1 : parsed;
}
 */

module.exports = reverseInt;
