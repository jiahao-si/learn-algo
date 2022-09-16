import { doneA } from './a.mjs';

// 循环引用会报错
// ReferenceError: Cannot access 'doneA' before initialization
// console.log('console log doneA in b.js before a.js export', doneA);

export const doneB = true;
