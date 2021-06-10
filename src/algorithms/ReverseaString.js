function reverseString(str) {
  let reverseString = str
    .split('')
    .reverse()
    .toString()
    .replace(/,/g, "") // flag g is a global search

  return console.log(reverseString);
}

function reverseString1(str) {
  let reverseString = str
    .split('')
    .reverse()
    .join("")

  return console.log(reverseString);
}

function reverseString2(str) {
  let reverseString = '';
  for (i = str.length - 1; i >= 0; i--) {
    reverseString += str[i]
  }

  return console.log(reverseString, str.length - 1);
}
reverseString("hello");
reverseString1("hello");
reverseString2("hello");
