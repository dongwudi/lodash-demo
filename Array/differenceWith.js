const _ = require('lodash');

let arr = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
// _.differenceWith(array, [values], [comparator])
let return_arr = _.differenceWith(arr, [{ 'x': 1, 'y': 2 }], _.isEqual);; // 这个方法类似 _.difference ，还接受一个 comparator （比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)

console.log(return_arr); //[ { x: 2, y: 1 } ]
