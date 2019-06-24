const _ = require('lodash');

// _.initial(array)
// 获取数组array中除了最后一个元素之外的所有元素（去除数组array中的最后一个元素）

console.log(_.initial([1, 2, 3])) // [ 1, 2 ]