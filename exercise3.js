function check_types(arr) {
  const differentTypes = new Set();

  arr.forEach((el) => {
    differentTypes.add(typeof el);
  });

  return differentTypes.size;
}

module.exports = {
  check_types,
};
