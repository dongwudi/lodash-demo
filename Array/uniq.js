const _ = require('lodash');

// _.uniq(array)
//创建一个去重后的array数组副本。使用了 SameValueZero 做等值比较。只有第一次出现的元素才会被保留

console.log(_.uniq([2, 1, 2]))

//[ 2, 1 ]