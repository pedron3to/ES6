/* 
  giver sorted array of integers, write a function called search, that accepts a value and return the index where the value assed to the function is located. if the value is not found, return -1
*/

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}
