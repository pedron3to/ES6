function coordinate(lat, long) {
  let _lat = lat;
  let _long = long;

  return {
    latitude: function () {
      return _lat
    },

    longitude: function () {
      return _long
    },

    translate: function (dx, dy) {
      return coordinate(_lat + dx, _long + dy);
    }, //another way to implement immutability

    toString: function () {
      return `(${_lat}, ${_long})`
    },
  }
}

const greenwich = coordinate(51.4778, 0.0015)

console.log(greenwich.tostring())