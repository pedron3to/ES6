// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

const uberArray = [1, 2, 3, 4, 5];

let allMultiplied = 1;

for(let i = 0; i < uberArray.length; i++) {
  allMultiplied = allMultiplied * uberArray[i]
}

const uberArrayMultiplyied = uberArray.map((number) => allMultiplied / number);

console.log({uberArrayMultiplyied});