/* 
  write a function called maxSubArraySum which accpts an arrya of integeres and a number called n. the function should calculate the maximum sum of n consecutive elements in the array.
*/

function maxSubArraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
