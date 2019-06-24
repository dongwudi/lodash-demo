const _ = require('lodash');

// _.flattenDepth(array, [depth=1])
let arr = _.flattenDepth([1, [2, [3, [4]], 5]], 2); //根据 depth 递归减少 array 的嵌套层级
console.log(arr); //[ 1, 2, 3, [ 4 ], 5 ]
