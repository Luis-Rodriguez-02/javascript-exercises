const removeFromArray = function(array, ...args) {
  const newArray = []

  array.forEach(argument => {
    if (!args.includes(argument)) {
      newArray.push(argument)
    }
  })
  
  return newArray;
}
// Do not edit below this line
module.exports = removeFromArray;
