const sumAll = function (firstNum, secondNum) {
  if (typeof firstNum !== "number" || typeof secondNum !== "number") {
    return "ERROR";
  }
  if (firstNum < 0 || secondNum < 0) {
    return "ERROR";
  }

  let sum = 0;
  if (firstNum < secondNum) {
    for (let numToAdd = firstNum; numToAdd <= secondNum; numToAdd++) {
      sum += numToAdd;
    }
  } else {
    for (let numToAdd = secondNum; numToAdd <= firstNum; numToAdd++) {
      sum += numToAdd;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
