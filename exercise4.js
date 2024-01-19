function checker(str) {
  let commasCount = 0;
  let questionsCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "?") questionsCount++;
    else if (char === ",") commasCount++;
  }

  return `${countSymbols(commasCount, "comma")}, ${countSymbols(
    questionsCount,
    "question mark"
  )}`;
}

function countSymbols(count, el) {
  return count > 1 ? `${count} ${el}s` : `${count} ${el}`;
}

module.exports = {
  checker,
};
