// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

//For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

//1-we need to sort ascendently the array
//2-for each - check if there a next posite integer

const array = [1, 2, 0];

const sortedArray = array.sort((a, b)=> a - b );


const getMissingInteger = (arr) => {
  let missingInteger = 0;
  const sortedArray = arr.sort((a, b)=> a - b );
  console.log({sortedArray});

  const findLastPositiveInteger = sortedArray.find((number, index) => 
    number > 0 && number + 1 !== sortedArray[index + 1]
  );

  missingInteger = findLastPositiveInteger + 1

  return missingInteger

}

getMissingInteger(array)
console.log({value: getMissingInteger(array)})