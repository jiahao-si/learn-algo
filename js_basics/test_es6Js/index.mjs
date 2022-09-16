import { doneA } from './a.mjs';
import { doneB } from './b.mjs';

console.log('doneA', doneA);
console.log('doneB', doneB);

setTimeout(() => {
  // doneA change to be true, because es module will not cache value,just save the reference
  console.log('console log doneA after doneA changed in A.js', doneA);
}, 1000);
