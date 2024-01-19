function howManyCaps(str) {
  let capitalsCount = 0;
  const capitalLetters = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === char.toUpperCase() && char !== " ") {
      capitalsCount++;
      capitalLetters.push(char);
    }
  }

  return `There are ${capitalsCount} capitals and these are ${capitalLetters.join(
    ","
  )}`;
}

module.exports = {
  howManyCaps,
};
