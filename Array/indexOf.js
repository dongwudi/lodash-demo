const _ = require('lodash');

// _.indexOf(array, value, [fromIndex=0])
// 首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。 没有找到返回-1
console.log(_.indexOf([1, 2, 1, 2], 2)) // 1
console.log(_.indexOf([1, 2, 1, 2], 2, 2)) // 3