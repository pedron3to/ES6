Implicit Type coercion is the process of convert a value to a valid type.

```js
let num1 = 9 * "3";
console.log(num1); //27 (a number);

let num2 = 9 + "3";
console.log(num2); //"93" (a string);
```

* using only for math operation.
+ used to concatenate strings.

Don't use implicit type coercion.

```js
  false == ""; // true
  false == "0"; // true
  "" == "0"; // false
  [0] == 0; // true
```

for Boolean comparison the best practise is to use ===
with this operators, primitive types are onluy
equivalent when both type and value match.

```js
false === ""; // false
false === "0"; // false
"" === "0"; // false
[0] === 0; // false
```

boolean value, the following rules are always treated as false.

false
0 is false
empty string is false
null is false
undefined is false
NaN (result os failed mathematical operations)
