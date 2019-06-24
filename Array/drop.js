const _ = require('lodash');

let arr = [1, 2, 3];
// _.drop(array, [n=1])
let return_arr = _.drop(arr); // 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）

console.log(return_arr); //[ 2, 3 ]
console.log(_.drop(arr, 2)); // [ 3 ]
