function uniqueElements(arr, max) {
  const uniqueSet = new Set();  
  arr.forEach(el => {
    if (typeof el === 'number' && el >= max) {
      uniqueSet.add(el)
    }
  })
  const newArr = Array.from(uniqueSet).map(el => el)

  return `old array ${arr.join(',')}, new array ${newArr.join(',')}`
}

module.exports = {
  uniqueElements
}