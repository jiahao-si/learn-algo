var done = false;

import { doneB } from './b.mjs';

console.log('console log doneB after b.js export', doneB);

export let doneA = done;

setTimeout(() => {
  doneA = true;
}, 100);
