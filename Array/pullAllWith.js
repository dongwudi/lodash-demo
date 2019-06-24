const _ = require('lodash');

// _.pullAllWith(array, values, [comparator])
// 类似于 _.pullAll ，接受 comparator 调用array中的元素和values比较。comparator 会传入两个参数：(arrVal, othVal)
// 这个方法会改变数组

let array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 
_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log(array); // [ { x: 1, y: 2 }, { x: 5, y: 6 } ]