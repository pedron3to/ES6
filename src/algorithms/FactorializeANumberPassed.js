function factorialize(num) {
  let i = 1;
  let factor = 1;

  while (i <= num) {
    factor *= i;
    i++
  }

  return factor;
}

console.log(factorialize(5));