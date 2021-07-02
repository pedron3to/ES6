function Pairs(arr) {
  const ascendingOrderArray = arr.sort((a, b) => a - b);
  console.log(ascendingOrderArray.length);
  const n = 2;

  const NumberOfSubArrays = (Math.ceil(arr.length / n))

  const arrayWithSubArrays = new Array(NumberOfSubArrays)
    .fill()
    .map(_ => ascendingOrderArray.splice(0, n))

  let howManyPairs = [];
  let numerosiguais = [];

  //  for (let i = 0; i < NumberOfSubArrays; i++) {

  //   if (arrayWithSubArrays[i + 1][0] === arrayWithSubArrays[i + 1][1]) {
  //     howManyPairs.push(i);
  //   }
  // }

  for (let i = 0; i < ascendingOrderArray.length; i++) {
    if (ascendingOrderArray[i] === ascendingOrderArray[i + 1]) {
      console.log(i);
    }
  }

  return numerosiguais;
}




console.log(Pairs([50, 49, 38, 49, 78, 36, 25, 96, 10, 67, 78, 58, 98, 8, 53, 1, 4, 7, 29, 6, 59, 93, 74, 3, 67, 47, 12, 85, 84, 40, 81, 85, 89, 70, 33, 66, 6, 9, 13, 67, 75, 42, 24, 73, 49, 28, 25, 5, 86, 53, 10, 44, 45, 35, 47, 11, 81, 10, 47, 16, 49, 79, 52, 89, 100, 36, 6, 57, 96, 18, 23, 71, 11, 99, 95, 12, 78, 19, 16, 64, 23, 77, 7, 19, 11, 5, 81, 43, 14, 27, 11, 63, 57, 62, 3, 56, 50, 9, 13, 45]))

/*
Problem:
There is a large pile of socks that must be paired by color.
Given an array of integers representing the color of each sock,
determine how many pairs of socks with matching colors there are.

Dividing the problem into small parts:
  1. create a new Array in ascending order;
  2. divide the given array into a new Array with subarrays with 2 positions;
  3. compare if the subarrays has equal items;
  4. push to new Array how many are equals;
*/