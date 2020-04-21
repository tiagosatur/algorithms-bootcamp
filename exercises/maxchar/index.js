// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/* 
SIMILAR QUESTIONS
- What is the most common character int the string?
- Does the string A have the same characters as string B (is it an anagram)?
- Does the given string have any repeated character in it?
*/

function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = "";

  // first, build a character map
  // for of is used for arrays and strings
  for (char of str) {
    // charMap[char] ? charMap[char]++ : (charMap[char] = 1);
    charMap[char] = charMap[char] + 1 || 1; // if adding results in null ? put 1
  }

  // search which char has greater value
  for (char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
