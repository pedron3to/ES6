function zipCode(code, location) {
  let _code = code;
  let _location = location || '';

  return {
    code: function () {
      return _code;
    },

    location: function () {
      return _location
    },

    fromString: function (string) {
      let parts = string.split('-');

      return zipCode(parts[0], parts[1])
    },

    toString: function () {
      return `${_code} - ${_location}`;
    }
  }
}

const princetonZip = zipCode('08544', '3345')
console.log(princetonZip.toString())
