const _ = require('lodash');

let arr = [3, 2, 1];
// _.difference(array, [values])
let return_arr = _.difference(arr, [4, 2]); // 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中

console.log(_.difference([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }])) //[ { x: 2 }, { x: 1 } ]
console.log(return_arr); //[ 3, 1 ]