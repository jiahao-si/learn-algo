const { doneA } = require('./a.js');
const { doneB } = require('./b.js');

console.log('doneA', doneA);
console.log('doneB', doneB);

setTimeout(() => {
  // still be true, because commonjs will cache value
  console.log('console log doneA after doneA changed in A.js', doneA);
}, 1000);
