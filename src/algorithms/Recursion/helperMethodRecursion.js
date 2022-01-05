const help = require('nodemon/lib/help');

function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput.length[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}
