function Pairs(arr) {
  const ascendingOrderArray = arr.sort();

  const n = 2;

  const NumberOfSubArrays = (Math.ceil(arr.length / n))

  const arrayWithSubArrays = new Array(NumberOfSubArrays)
    .fill()
    .map(_ => ascendingOrderArray.splice(0, n))

  let howManyPairs = [];

  for (let i = 0; i < NumberOfSubArrays; i++) {
    if (arrayWithSubArrays[i][0] === arrayWithSubArrays[i][1]) {
      howManyPairs.push(i);
    }
  }

  return howManyPairs.length;
}




console.log(Pairs([10, 20, 20, 10, 10, 30, 50, 10, 20]))

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