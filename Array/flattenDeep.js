const _ = require('lodash');

// _.flattenDeep(array)
let arr = _.flattenDeep([1, [2, [3, [4]], 5]]); //将array递归为一维数组
console.log(arr); // [ 1, 2, 3, 4, 5 ]
