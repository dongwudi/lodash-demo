const _ = require('lodash');

// _.intersection([arrays])
// 创建唯一值的数组，这个数组包含所有给定数组都包含的元素 (可以理解为给定数组的交集)

console.log(_.intersection([2, 1], [4, 2], [1, 2])) // [ 2 ]