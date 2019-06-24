const _ = require('lodash');

// _.sortedLastIndexOf(array, value)
// 这个方法类似 _.lastIndexOf，除了它是在已经排序的数组array上执行二进制检索
// 返回匹配值的索引位置，否则返回 -1。

console.log(_.sortedLastIndexOf([4, 5, 5, 5, 6], 5)) // 3