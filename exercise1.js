function check_who_is_older(name, age, name2, age2) {
  return age > age2
    ? `${name} age ${age} is older than ${name2} age ${age2}`
    : `${name2} age ${age2} is older than ${name} age ${age}`;
}

module.exports = {
  check_who_is_older,
};
