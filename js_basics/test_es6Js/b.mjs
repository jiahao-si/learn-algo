import { objectA } from './a.mjs';

// 循环引用会报错
// ReferenceError: Cannot access 'objectA' before initialization
// objectA.counter = 'changed counter in B';

export const objectB = { counter: 'counterInB' };
