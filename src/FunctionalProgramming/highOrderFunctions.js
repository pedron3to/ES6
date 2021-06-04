//HOF receives another functions as arguments

const multiplier = (a, b) => a * b;

function applyOperation(a, b, opt) {
  return opt(a, b)
}

console.debug('applyOperation Multiply 2 and 3', applyOperation(2, 3, multiplier))


function makeAddFunction(amount) {
  function add(number) {
    return number + amount
  }
  return add;
}

function makeExponentialFunction(base) {
  function raise(exponent) {
    return Math.pow(base, exponent)
  }

  return raise
}
const addTenTo = makeAddFunction(10)

console.debug('makeAddFunction(10)', addTenTo(10))

const raiseThreeTo = makeExponentialFunction(3)

console.debug('raiseThreeTo(2)', raiseThreeTo(2))
