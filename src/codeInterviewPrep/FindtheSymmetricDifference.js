function sym(...args) {
  for (let a = 0; a < args.length; a++) {
    console.log(args[a][a])
    // if (
    //   (args[a][a] !== args[(a + 1)][a])
    // ) {
    //   console.log(args[a][a], args[(a + 1)][a])
    // }

  }

  // let newArray = [].concat(...args);

  // let sortedArray = newArray.sort();

  // let uniqueArray = [];

  // console.log(sortedArray)

  // for (let i = 0; i < sortedArray.length; i++) {

  //   if (
  //     (sortedArray[i] !== sortedArray[(i - 1)]) &&
  //     (sortedArray[i] !== sortedArray[(i + 1)])
  //   ) {
  //     uniqueArray.push(sortedArray[i])
  //   }
  // }

  // return uniqueArray


}

console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]));

