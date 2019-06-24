const _ = require('lodash');

// _.sortedIndexBy(array, value, [iteratee=_.identity])
// 接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)

let objects = [{ 'x': 4 }, { 'x': 5 }]


console.log(_.sortedIndexBy(objects, { 'x': 3 }, function(o) { return o.x; })); // 0
 
console.log(objects) // [ { x: 4 }, { x: 5 } ]
