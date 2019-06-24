const _ = require('lodash');

let arr = [0, 1, false, 2, '', 3, undefined];
// _.compact(array)
let return_arr = _.compact(arr); // 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”

console.log(return_arr); // [ 1, 2, 3 ]