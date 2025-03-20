const removeFromArray = function (arr, ...toBeDeleted) {
  return arr.filter((item) => {
    let keepItem = true;
    for (const itemToDelete of toBeDeleted) {
      if (item === itemToDelete) {
        keepItem = false;
        break;
      }
    }
    return keepItem;
  });
};

/*
Another correct solution
Traverse backwards to avoid skipping elements after splice shifts the index values

let arr = [1, 2, 2, 3];
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] === 2) {
    arr.splice(i, 1);
  }
}
console.log(arr); // Correct output: [1, 3]

*/

// Do not edit below this line
module.exports = removeFromArray;
