function uniqueElements(arr) {
  const uniqueSet = new Set();  
  arr.forEach(el => uniqueSet.add(el))
  const newArr = Array.from(uniqueSet).map(el => el)

  return `old array ${arr.join(',')}, new array ${newArr.join(',')}`
}

module.exports = {
  uniqueElements
}