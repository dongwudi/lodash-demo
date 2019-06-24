const _ = require('lodash');

// _.sortedIndex(array, value)
// 使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序
//  返回 value值 应该在数组array中插入的索引位置 index

let array = [30, 50];


console.log(_.sortedIndex(array, 40)); // 1
console.log(array) // [30, 50];
