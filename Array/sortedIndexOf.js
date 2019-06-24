const _ = require('lodash');

// _.sortedIndexOf(array, value)
// 这个方法类似 _.indexOf，除了它是在已经排序的数组array上执行二进制检索

console.log(_.sortedIndexOf([4, 5, 5, 5, 6], 5)); // 1
 