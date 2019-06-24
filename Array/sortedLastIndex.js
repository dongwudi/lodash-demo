const _ = require('lodash');

// _.sortedLastIndex(array, value)
// 此方法类似于 _.sortedIndex，除了 它返回 value值 在 array 中尽可能大的索引位置（index）
// 返回 value值 应该在数组array中插入的索引位置 index

console.log(_.sortedLastIndex([4, 5, 5, 5, 6], 5)); // 4
 