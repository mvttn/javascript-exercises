const palindromes = function (string) {
  const newString = string.toLowerCase().replace(/[^0-9a-z]/g, "");
  // Define pointers
  let i = 0;
  let j = newString.length - 1;

  while (i < j) {
    if (newString[i] !== newString[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
