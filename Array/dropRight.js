const _ = require('lodash');

let arr = [1, 2, 3];
// _.dropRight(array, [n=1])
let return_arr = _.dropRight(arr); // 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）

console.log(return_arr); //[ 1, 2 ]
console.log(_.dropRight(arr, 2)); // [ 1 ]
