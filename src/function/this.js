'use strict';
function logThis() {
  this.desc = 'logger';
  console.log(this);
}
console.log(new logThis());