const _ = require('lodash');

// _.sortedUniq(array)
// 这个方法类似 _.uniq，除了它会优化排序数组
//  返回一个新的不重复的数组

console.log(_.sortedUniq([1, 1, 2])) // [ 1, 2 ]