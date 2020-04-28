// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Must remember for interview
function anagrams(stringA, stringB) {
  return clearString(stringA) === clearString(stringB);
}

function clearString(string) {
  return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

/*
// First solution 

function anagrams(stringA, stringB) {
  const aCharMap = createCharMap(stringA);
  const bCharMap = createCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
    return false;

  for (let key in bCharMap) {
    if (aCharMap[key] !== bCharMap[key]) {
      return false;
    }
  }
  
  return true;
}

function createCharMap(string) {
  let charMap = {};

  for (let char of string.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
} */

module.exports = anagrams;
