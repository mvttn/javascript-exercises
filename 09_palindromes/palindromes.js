const palindromes = function (string) {
  string = string.toLowerCase().replace(/[^0-9a-z]/g, "");
  // Define pointers
  i = 0;
  j = string.length - 1;

  while (i < j) {
    if (string[i] !== string[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
