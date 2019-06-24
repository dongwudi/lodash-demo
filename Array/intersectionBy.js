const _ = require('lodash');

// _.intersectionBy([arrays], [iteratee=_.identity])
// 接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。iteratee 会传入一个参数：(value)

console.log(_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor)) // [ 2.1 ]
console.log(_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')) // [ { x: 1 } ]