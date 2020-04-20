// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

module.exports = reverse;

/* 
// Solution 01
function reverse(str) {
  return str.split("").reverse().join("");
}
*/

/* 
// Solution 02
function reverse(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}
*/
