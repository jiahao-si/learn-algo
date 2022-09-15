import { objectA } from './a.mjs';

objectA.counter = 'changed counter in B';

export const objectB = objectA;
