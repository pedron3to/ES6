variable can be changed during program execution.

Declaring variables:

it is possible to declare multiples variables at the same time:

```js
// with the var keyword
var height, weight;

//the above variables are declared but not initialized.
```

```js
// without keyword
height = 1;

//the above variables are declared and initialized.

/* it is not recommended declaring a global variable without the keyword var.

```

let keyword.

is a block scoped variable. 
is limited in the code block, statement, or expression in which it is used.

var: creates global mutable pointers. 
let: creates local mutable pointers
const: creates immutable pointers.

All variables are pointers:
Assignment is the act of pointing tha variable to something in memory.