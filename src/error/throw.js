function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw 'Parameter is not a number!';
  }
}

try {
  getRectArea(3, 'A');
} catch (err) {
  console.log(err)
}