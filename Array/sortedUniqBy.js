const _ = require('lodash');

// _.sortedUniqBy(array, [iteratee])
// 这个方法类似 _.uniqBy，除了它会优化排序数组
//  返回一个新的不重复的数组

console.log(_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)) //[ 1.1, 2.3 ]