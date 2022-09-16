var done = false;

var b = require('./b.js');

module.exports = { doneA: done };

setTimeout(() => {
  done = true;
}, 100);
