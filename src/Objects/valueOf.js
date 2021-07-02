const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

const arr = [1, 2, 3]

/*Returns an array containing the values that correspond
 to all of a given object's own enumerable string properties.*/

console.log(Object.valueOf(object1.a))
