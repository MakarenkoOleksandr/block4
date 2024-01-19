function isTrue(data) {
  const correctData =
    typeof data !== "undefined" &&
    data !== "" &&
    data !== false &&
    data !== null &&
    data !== 0 &&
    !Number.isNaN(data);

  return correctData;
}

module.exports = {
  isTrue,
};
