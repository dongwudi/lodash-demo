const _ = require('lodash');

let arr = [3.1, 2.2, 1.3];
// _.differenceBy(array, [values], [iteratee=_.identity])
let return_arr = _.differenceBy(arr, [4.4, 2.5], Math.floor); // 类似 _.difference ，它还接受一个 iteratee （迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）

console.log(return_arr); //[3.1, 1.3]

console.log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x')) // [ { x: 2 } ]