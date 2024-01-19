function booleanChecker(arr, maxCapacity) {
  const bool = [];

  for (const el of arr) {
    if (typeof el === "boolean") {
      bool.push(el);
      if (bool.length >= maxCapacity) {
        break;
      }
    }
  }

  return `${bool.length} booleans were found ${bool.join(",")}`;
}

booleanChecker(["12", "55", "hello"], 3);

module.exports = {
  booleanChecker,
};
