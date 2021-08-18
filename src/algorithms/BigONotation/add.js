function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    console.log((total += i));
    total += i;
  }
  return total;
}

addUpTo(5);

function addUpto2(n) {
  return n + (n + 1) / 2;
}
//much faster
