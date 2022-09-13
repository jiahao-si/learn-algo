export const objectA = {
    counter : 'origin counter in A' 
};

import { objectB} from './b.mjs'

console.log('objectB.counter',objectB.counter)
