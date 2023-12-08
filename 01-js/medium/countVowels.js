/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let lowerStr = str.toLowerCase();
  let vowelCount = 0;
  let stringChar = '';

  for (let i = 0; i < lowerStr.length; i++) {
    stringChar = lowerStr.charAt(i);
    if (stringChar == 'a' || stringChar == 'e' || stringChar == 'i' || stringChar == 'o' || stringChar == 'u') {
      vowelCount++;
    }

  }
  return vowelCount;
}

module.exports = countVowels;