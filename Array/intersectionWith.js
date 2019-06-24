const _ = require('lodash');

// _.intersectionWith([arrays], [comparator])
// 接受一个 comparator 调用比较arrays中的元素。结果值是从第一数组中选择。comparator 会传入两个参数：(arrVal, othVal)

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
console.log(_.intersectionWith(objects, others, _.isEqual));
// [ { x: 1, y: 2 } ]