const _ = require('lodash');

// _.union([arrays])
// 创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用 SameValueZero做等值比较。（ arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）

console.log(_.union([2], [1, 2], [3]))

//[ 2, 1, 3 ]