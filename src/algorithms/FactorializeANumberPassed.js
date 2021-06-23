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

//recursive
function factorial(n) {
  if (n < 0) {
    return -1
  } else if (n == 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }

}