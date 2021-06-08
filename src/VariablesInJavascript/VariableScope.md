#There are three types os scope:

1. global;
2. local;
3. block;

#Global:

declared outside of any function or declared with no use keyword var, const or let.

It is available in the entire Javascript Code;

```js
var globalVariable = 'A' // a global variable

function testScope() {

}
```

#Local Scope:

declared within a function with the keyword. It is available only within a function.

```js
var globalVariable = 'A' // a global variable

function testScope() {
  var localVariable = 'B' // a local variable
  console.log(localVariable) // 'B'
  console.log(globalVariable) // 'A'
}

console.log(localVariable) // ReferenceError
console.log(localVariable) // 'A'
```

#BlockScoped

```js
function testScope2() {
    if (true) {
        var localVariable = "X"
        let blockVariable = "Y";
    }
    document.writeln(localVariable); // X
    document.writeln(blockVariable); // ReferenceError
}
```



