(function example() {
  var top = 'top';
  bottom = 'bottom';

  console.log(top); //it will work because var is defined as 'top'
  console.log(bottom); //it will work because var is defined bellow

  var bottom
})()