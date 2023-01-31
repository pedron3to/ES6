// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

// Given this implementation of cons:

// def cons(a, b):
//     def pair(f):
//         return f(a, b)
//     return pair
// Implement car and cdr.

const cons = (a, b) => [a, b];

const car = (fn) => fn[0];

const cdr = (fn) => fn[1];

console.log({car: car(cons(3,4)), cdr: cdr(cons(3,4))})

