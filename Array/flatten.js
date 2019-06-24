const _ = require('lodash');

// _.flatten(array)
let arr = _.flatten([1, [2, [3, [4]], 5]]); //减少一级array嵌套深度
console.log(arr); // [ 1, 2, [ 3, [ 4 ] ], 5 ]
