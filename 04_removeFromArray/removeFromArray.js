const removeFromArray = function (array, ...ArgsToRemove) {
  const newArray = [];
  for (const element of array) {
    if (!ArgsToRemove.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
