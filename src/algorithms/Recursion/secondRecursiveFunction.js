function sumRange(num) {
  if (num === 1) return 1;

  return num + sumRange(num - 1);
}

console.log(sumRange(10));

4 + 3 + 2 + 1 + 15 + 12;

30;
