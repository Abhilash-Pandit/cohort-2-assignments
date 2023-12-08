/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let isPalindrome = true;
  let lowerStr = str.replace(/[^0-9a-z]/gi, '');
  lowerStr = lowerStr.toLowerCase();
  let palindromeLength = lowerStr.length;

  for (let i = 0; i < palindromeLength; i++) {
    if (lowerStr.charAt(i) != lowerStr.charAt(palindromeLength - 1 - i)) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

module.exports = isPalindrome;
