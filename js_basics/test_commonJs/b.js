
var { objectA } = require('./a.js')  

// Uncaught TypeError: Cannot set property 'counter' of undefined
// objectA.counter = 'changed counter in B'

// const objectB = objectA

module.exports = {}
// module.exports = {objectB}

// objectA.counter = 'changed counter in B'