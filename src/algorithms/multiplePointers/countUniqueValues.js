/* 
  Implemet a function called countUniqueValues, which
  accpets a sorted array, and counts the unique values in the array.
  there can be negative numbers in the array, but it will be sorted.
*/

function countUniqueValues(arr) {
  var i = 0;

  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }

  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]));
