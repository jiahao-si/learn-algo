var { doneA } = require('./a.js');

console.log('console log doneA before a.js export doneA', doneA);

module.exports = { doneB: true };
