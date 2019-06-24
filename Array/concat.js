const _ = require('lodash');

let arr = [0, 1, false];
// _.concat(array, [values])
let return_arr = _.concat(arr, 2, [5], [[6]]); // 创建一个新数组，将array与任何数组 或 值连接在一起

console.log(return_arr); // [ 0, 1, false, 2, 5, [ 6 ] ]