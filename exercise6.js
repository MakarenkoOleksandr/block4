function numberConverter(arr) {
  let countToConvert = 0;
  let noAbleToConvert = 0;
  const convertedValues = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (typeof el === "number") continue;
    if (el === "" || (Array.isArray(el) && el.length > 1)) noAbleToConvert++;
    else {
      const convertValue = parseFloat(el);
      if (!isNaN(convertValue)) {
        countToConvert++;
        convertedValues.push(convertValue);
      } else {
        noAbleToConvert++;
      }
    }
  }
  
  if (countToConvert > 0 && noAbleToConvert > 0) {
    return `${countToConvert} were converted to numbers: ${convertedValues.join(
      ","
    )}, ${noAbleToConvert} couldn't be converted`;
  }

  return "no need for conversion";
}

module.exports = {
  numberConverter,
};
