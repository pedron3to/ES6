
var globalVariable = 'A'

function testScope() {
  var localVariable = 'B' // a local variable
  console.debug('localVariable inside of testScope() = ', localVariable) // 'B'
  console.debug('globalVariable inside of testScope() = ', globalVariable) // 'A'
}

testScope();

//console.debug('localVariable out of testScope()', localVariable) // ReferenceError
console.debug('globalVariable out of testScope() = ', globalVariable) // 'A'



function testScope2() {
  if (true) {
    var localVariable = "X"
    let blockVariable = "Y";
    console.debug('blockVariable = ', blockVariable);
  }
  console.debug('localVariable = ', localVariable);
  console.debug('blockVariable = ', blockVariable);
}

testScope2()

