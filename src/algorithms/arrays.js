const array = [
  [1, 1],
  [1, 2],
  [2, 3]
]

const newArr = [];
if (array[0][0] === array[0][1]) {
  newArr.push(1)
} else if (array[0][1] === array[1][0]) {
  newArr.push(1)
}

if (array[1][0] === array[1][1]) {
  newArr.push(1)
} else if (array[1][1] === array[2][0]) {
  newArr.push(1)
}

console.log(newArr)
