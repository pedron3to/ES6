/* 
  write a function called same, which accepts two arrays.
  The functino should return true if every value in the array has it's corresponding 
  value if every value in the array has it's corresponding value squared in the second array.
  the frequencies of values must be the same.

  same([1,2,3], [4,1,9]) true
  same([1,2,3], [1,9]) false
  same([1,2,1], [4,4,1]) false (must be same frenquency)

*/

function same(arr1: number[], arr2: number[]) {
  //both arrays has to be the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    //find in arr2 the index of arr1[i] squared
    let corretIndex = arr2.indexOf(arr1[i] ** 2); //selfLooping

    //if not find index return false and stop looping
    if (corretIndex === -1) {
      return false;
    } else {
      //if finds it delete this index from arr2
      arr2.splice(corretIndex, 1);
    }
    return true;
  }
}

console.log(same([1, 2, 3, 2], [9, 4, 1, 4]));
