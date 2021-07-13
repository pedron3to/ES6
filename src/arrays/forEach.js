const array = [4, 2, 53, 4, 5];

console.log(
  array.forEach((value) => {
    console.log(value % 2 === 0 ? value * 2 : value * 3)
  })
);
