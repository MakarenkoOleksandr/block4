function is_an_even_number(arr) {
  let count = 0;

  arr.forEach((el) => {
    const num = parseInt(el);
    if (!isNaN(num) && el % 2 === 0) count++;
  });

  return count;
}

module.exports = {
  is_an_even_number,
};
