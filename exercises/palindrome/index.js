// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  /* 
    This is not the ideal solution because we are doing as twice as comparisons then necessary.
    This because it goes through the array, and comes back making the comparison.
    If it just every element to the center we don't need to check all the remaining elements.
  */
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// Alternative solution
// function palindrome(str) {
//   return str.split("").reduce((reversed, char) => char + reversed, "") === str;
// }

module.exports = palindrome;
